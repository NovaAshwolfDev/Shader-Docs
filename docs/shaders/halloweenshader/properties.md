---
id: properties
title: Properties
---

# Shader Properties

| Property | Type | Description |
|-----------|------|-------------|
| `_Speed` | Range (0–3) | Controls how fast the gradient scrolls vertically. |
| `_MaskMap` | 2D | Mask texture for emission. Red or alpha defines active glow. |
| `_Scale` | Float | Controls pattern frequency. |
| `_AlbedoRGB` | 2D | Base texture for surface color. |
| `_AlbedoTint` | Color | Multiplies color tint over the albedo. |
| `_AlbedoMultiplier` | Float | Adjusts albedo brightness. |
| `_EmissionMultiplier` | Float | Boosts glow brightness. |
| `_OrangeGradient` | Toggle | Switch between blue/purple and orange glow palette. |
| `_UseAlpha` | Toggle | If on, alpha controls emission intensity. |
| `_NormalMap` | 2D | Adds surface normal detail. |

> 💡 **Tip:** For best results, combine this shader with Unity’s Bloom post-processing effect.
