---
sidebar_position: 3
---

# Props

| Props             | Required | Default    | Type                       | Description                          |
| ----------------- | -------- | ---------- | -------------------------- | ------------------------------------ |
| loop              | false    | true       | boolean                    | whether the carousel should loop     |
| autoplay          | false    | true       | boolean                    | whether the carousel should autoplay |
| onSnap            | false    | null       | (index: number) => void;   | callback on snapping to an item      |
| autoplayInterval  | false    | 2500       | number                     | configure the interval on autoplay   |
| autoplayDirection | false    | increment  | `increment` \| `decrement` | configure the autoplay direction     |
| orientation       | false    | horizontal | `horizontal` \| `vertical` | configure the carousel direction     |
