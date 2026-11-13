"use client"

import { useEffect, useRef, useState } from "react"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "cn"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  disabled,
  orientation = "horizontal",
  markers = [],
  markersVisible = false,
  onValueChange,
  ...props
}: SliderPrimitive.Root.Props & { markers?: readonly number[]; markersVisible?: boolean }) {
  const [isPointerDragging, setIsPointerDragging] = useState(false)
  const [areMarkersVisible, setAreMarkersVisible] = useState(false)
  const [stretch, setStretch] = useState(0)
  const markerHideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pointerStart = useRef<{
    id: number
    lower: number
    upper: number
    size: number
    startedOnTrack: boolean
  } | null>(null)
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  useEffect(() => () => {
    if (markerHideTimeout.current !== null) {
      clearTimeout(markerHideTimeout.current)
    }
  }, [])

  function finishPointerInteraction() {
    const start = pointerStart.current

    if (start === null) {
      return
    }

    pointerStart.current = null
    setIsPointerDragging(false)
    setStretch(0)

    if (start.startedOnTrack === true) {
      markerHideTimeout.current = setTimeout(() => {
        setAreMarkersVisible(false)
        markerHideTimeout.current = null
      }, 700)
    } else {
      setAreMarkersVisible(false)
    }
  }

  return (
    <SliderPrimitive.Root
      className={cn("data-horizontal:w-full data-vertical:h-full", className)}
      data-slot="slider"
      data-pointer-dragging={isPointerDragging ? "" : undefined}
      defaultValue={defaultValue}
      disabled={disabled}
      value={value}
      min={min}
      max={max}
      orientation={orientation}
      thumbAlignment="edge"
      onValueChange={(nextValue, eventDetails) => {
        if (eventDetails.reason === "drag" && pointerStart.current?.startedOnTrack === true) {
          eventDetails.cancel()
          return
        }

        onValueChange?.(nextValue, eventDetails)
      }}
      {...props}
    >
      <SliderPrimitive.Control
        className={cn(
          "relative flex w-full touch-none items-center select-none before:absolute before:content-[''] data-horizontal:before:inset-x-0 data-horizontal:before:-inset-y-4 data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col data-vertical:before:inset-y-0 data-vertical:before:-inset-x-4",
          isPointerDragging
            ? "transition-none"
            : "motion-safe:transition-transform motion-safe:duration-600 motion-safe:ease-out"
        )}
        style={{
          transform: orientation === "horizontal"
            ? `translateX(${stretch * 50}%) scaleX(${1 + Math.abs(stretch)})`
            : `translateY(${stretch * 50}%) scaleY(${1 + Math.abs(stretch)})`,
        }}
        onPointerDownCapture={(event) => {
          if (disabled === true || event.button !== 0) {
            return
          }

          if (markerHideTimeout.current !== null) {
            clearTimeout(markerHideTimeout.current)
            markerHideTimeout.current = null
          }
          setAreMarkersVisible(true)

          const horizontal = orientation === "horizontal"
          const bounds = event.currentTarget.getBoundingClientRect()
          const pressedThumb = event.target instanceof Element
            ? event.target.closest('[data-slot="slider-thumb"]')
            : null
          const thumb = pressedThumb ?? event.currentTarget.querySelector('[data-slot="slider-thumb"]')
          const thumbBounds = thumb?.getBoundingClientRect()
          const thumbSize = horizontal ? thumbBounds?.width ?? 0 : thumbBounds?.height ?? 0
          const pointerOffset = pressedThumb !== null && thumbBounds !== undefined
            ? horizontal
              ? event.clientX - (thumbBounds.left + thumbSize / 2)
              : event.clientY - (thumbBounds.top + thumbSize / 2)
            : 0

          pointerStart.current = {
            id: event.pointerId,
            lower: (horizontal ? bounds.left : bounds.top) + thumbSize / 2 + pointerOffset,
            upper: (horizontal ? bounds.right : bounds.bottom) - thumbSize / 2 + pointerOffset,
            size: horizontal ? bounds.width : bounds.height,
            startedOnTrack: pressedThumb === null,
          }
          setIsPointerDragging(pressedThumb !== null)
        }}
        onPointerMoveCapture={(event) => {
          const start = pointerStart.current

          if (start === null || start.id !== event.pointerId || start.startedOnTrack === true) {
            return
          }

          const horizontal = orientation === "horizontal"
          const position = horizontal ? event.clientX : event.clientY
          const overflow = position - Math.max(start.lower, Math.min(start.upper, position))
          const stretchDistance = 48 * Math.log1p(Math.abs(overflow) / 240)

          setStretch(
            Math.sign(overflow) * stretchDistance /
              Math.max(start.size, 1)
          )
        }}
        onPointerUpCapture={finishPointerInteraction}
        onPointerCancelCapture={finishPointerInteraction}
        onLostPointerCapture={finishPointerInteraction}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-none bg-muted select-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1"
        >
          {markers.length > 0 && (
            <div
              aria-hidden="true"
              data-slot="slider-markers"
              className={cn(
                "pointer-events-none absolute transition-opacity duration-500 ease-out motion-reduce:transition-none",
                orientation === "horizontal" ? "inset-x-1 inset-y-0" : "inset-x-0 inset-y-3",
                areMarkersVisible === true || markersVisible === true ? "opacity-100" : "opacity-0"
              )}
            >
              {markers.filter((marker) => marker > min && marker < max).map((marker) => (
                <span
                  key={marker}
                  className={cn(
                    "absolute bg-white/15",
                    orientation === "horizontal" ? "inset-y-0 w-[4px]" : "inset-x-0 h-[4px]"
                  )}
                  style={orientation === "horizontal"
                    ? { insetInlineStart: `${(marker - min) / (max - min) * 100}%`, translate: "-50% 0" }
                    : { bottom: `${(marker - min) / (max - min) * 100}%`, translate: "0 50%" }}
                />
              ))}
            </div>
          )}
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-primary select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            aria-label={props["aria-label"]}
            aria-labelledby={props["aria-labelledby"]}
            aria-valuetext={props["aria-valuetext"]}
            data-slot="slider-thumb"
            key={index}
            className="relative block h-6 w-2 shrink-0 rounded-none ring-ring/50  select-none after:absolute after:-inset-2"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
