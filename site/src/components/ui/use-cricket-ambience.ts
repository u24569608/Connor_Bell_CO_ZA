"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const preferenceKey = "weather-audio-enabled";

function savePreference(enabled: boolean) {
  try {
    window.localStorage.setItem(preferenceKey, String(enabled));
  } catch {}
}

export function useCricketAmbience(active: boolean) {
  const [enabled, setEnabled] = useState(false);
  const [starting, setStarting] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const context = useRef<AudioContext | null>(null);
  const buffer = useRef<AudioBuffer | null>(null);
  const loading = useRef<AbortController | null>(null);

  const prepare = useCallback(async () => {
    if (loading.current !== null) {
      return;
    }

    const controller = new AbortController();
    loading.current = controller;
    setStarting(true);
    setError(null);

    try {
      context.current ??= new AudioContext();
      const audio = context.current;
      await audio.resume();

      if (buffer.current === null) {
        const response = await fetch("/audio/crickets.mp3", { signal: controller.signal });

        if (response.ok !== true) {
          throw new Error("Cricket Sound Unavailable.");
        }

        const decoded = await audio.decodeAudioData(await response.arrayBuffer());

        if (controller.signal.aborted === true) {
          return;
        }

        buffer.current = decoded;
      }

      if (controller.signal.aborted !== true) {
        setReady(true);
      }
    } catch {
      if (controller.signal.aborted !== true) {
        setEnabled(false);
        setError("Cricket Sound Unavailable.");
      }
    } finally {
      if (controller.signal.aborted !== true) {
        setStarting(false);
      }

      if (loading.current === controller) {
        loading.current = null;
      }
    }
  }, []);

  function toggle() {
    if (enabled === true) {
      loading.current?.abort();
      loading.current = null;
      setStarting(false);
      setEnabled(false);
      savePreference(false);
      return;
    }

    if (active !== true || starting === true) {
      return;
    }

    setEnabled(true);
    savePreference(true);
    void prepare();
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        setEnabled(window.localStorage.getItem(preferenceKey) === "true");
      } catch {}
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (active !== true || enabled !== true || ready === true || starting === true) {
      return;
    }

    function unlock(event: Event) {
      if (event.target instanceof Element && event.target.closest("[data-weather-audio]") !== null) {
        return;
      }

      void prepare();
    }

    document.addEventListener("click", unlock);
    document.addEventListener("keydown", unlock);
    return () => {
      document.removeEventListener("click", unlock);
      document.removeEventListener("keydown", unlock);
    };
  }, [active, enabled, ready, starting, prepare]);

  useEffect(() => {
    const audio = context.current;
    const recording = buffer.current;

    if (active !== true || enabled !== true || ready !== true || audio === null || recording === null) {
      return;
    }

    const playback = audio;
    const clip = recording;
    let cancelled = false;
    let timer: number | undefined;
    let playing: { source: AudioBufferSourceNode; gain: GainNode } | null = null;

    function stop() {
      window.clearTimeout(timer);
      const track = playing;
      playing = null;

      if (track === null) {
        return;
      }

      const now = playback.currentTime;
      const volume = track.gain.gain.value;
      track.gain.gain.cancelScheduledValues(now);
      track.gain.gain.setValueAtTime(volume, now);
      track.gain.gain.linearRampToValueAtTime(0, now + 0.6);
      track.source.onended = () => {
        track.source.disconnect();
        track.gain.disconnect();
      };
      track.source.stop(now + 0.65);
    }

    function canPlay() {
      return cancelled !== true && document.visibilityState === "visible";
    }

    async function play() {
      if (canPlay() !== true) {
        return;
      }

      try {
        await playback.resume();

        if (canPlay() !== true) {
          return;
        }

        if (playback.state !== "running") {
          throw new Error("Cricket Sound Unavailable.");
        }

        const source = playback.createBufferSource();
        const gain = playback.createGain();
        const now = playback.currentTime;
        const duration = clip.duration;
        const fade = Math.min(1, duration / 3);
        source.buffer = clip;
        source.connect(gain);
        gain.connect(playback.destination);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.4, now + fade);
        gain.gain.setValueAtTime(0.4, now + duration - fade);
        gain.gain.linearRampToValueAtTime(0, now + duration);
        playing = { source, gain };
        source.onended = () => {
          source.disconnect();
          gain.disconnect();
          playing = null;
        };
        source.start(now);
        timer = window.setTimeout(() => void play(), 30000);
      } catch {
        if (cancelled !== true) {
          setEnabled(false);
          setError("Cricket Sound Unavailable.");
        }
      }
    }

    function visibilityChanged() {
      stop();

      void play();
    }

    void play();
    document.addEventListener("visibilitychange", visibilityChanged);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", visibilityChanged);
      stop();
    };
  }, [active, enabled, ready]);

  useEffect(() => () => {
    loading.current?.abort();
    const audio = context.current;
    context.current = null;

    if (audio !== null) {
      window.setTimeout(() => void audio.close().catch(() => {}), 700);
    }
  }, []);

  return { enabled, starting, error, toggle };
}
