"use client"

import { useRef, useState } from "react"
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
  ...props
}: SliderPrimitive.Root.Props) {
  const [isPointerDragging, setIsPointerDragging] = useState(false)
  const [stretch, setStretch] = useState(0)
  const pointerStart = useRef<{
    id: number
    x: number
    y: number
    bounds: DOMRect
  } | null>(null)
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  function finishPointerInteraction() {
    pointerStart.current = null
    setIsPointerDragging(false)
    setStretch(0)
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
      {...props}
    >
      <SliderPrimitive.Control
        className={cn(
          "relative flex w-full touch-none items-center select-none before:absolute before:content-[''] data-horizontal:before:inset-x-0 data-horizontal:before:-inset-y-4 data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col data-vertical:before:inset-y-0 data-vertical:before:-inset-x-4 motion-safe:transition-transform motion-safe:ease-out",
          isPointerDragging ? "motion-safe:duration-300" : "motion-safe:duration-600"
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

          pointerStart.current = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            bounds: event.currentTarget.getBoundingClientRect(),
          }
          setIsPointerDragging(
            event.target instanceof Element &&
              event.target.closest('[data-slot="slider-thumb"]') !== null
          )
        }}
        onPointerMoveCapture={(event) => {
          const start = pointerStart.current

          if (start === null || start.id !== event.pointerId) {
            return
          }

          if (Math.hypot(event.clientX - start.x, event.clientY - start.y) >= 4) {
            setIsPointerDragging(true)
          }

          const horizontal = orientation === "horizontal"
          const position = horizontal ? event.clientX : event.clientY
          const lower = horizontal ? start.bounds.left : start.bounds.top
          const upper = horizontal ? start.bounds.right : start.bounds.bottom
          const overflow = position - Math.max(lower, Math.min(upper, position))

          setStretch(
            Math.sign(overflow) * Math.min(Math.abs(overflow) * 0.2, 24) /
              Math.max(upper - lower, 1)
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
