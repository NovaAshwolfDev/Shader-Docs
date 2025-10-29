---
id: properties
title: Properties
---

# Shader Properties

| Property | Type | Description |
|-----------|------|-------------|
| `_Speed` | Range (0–6) | Controls animation speed of the dark matter field. |
| `_DarkMatterTexture` | 2D | Base dark matter texture that drives the visual pattern. |
| `_Scale` | Range (0–4) | Controls how zoomed or detailed the texture appears. |
| `_WindNormal` | 2D | Secondary texture used for wave-like movement and distortion. |
| `_Bloom` | Range (0–3) | Amplifies emission brightness for bloom post-processing. |
| `_MaskMap` | 2D | Controls emission masking or shape of the dark matter glow. |
| `_BaseColorRGB` | 2D | Albedo texture for the base color underneath the emission. |
| `_NormalMap` | 2D | Normal map for surface detail. |
| `_NormalMapScale` | Range (1–5) | Scales the intensity of the normal map. |
| `_GalaxyParallaxSpeed` | Range (-1–1) | Controls parallax speed for depth-based galaxy scrolling. |
| `_GalaxyParallaxTilingAmount` | Range (0–5) | Controls tiling intensity of the parallax galaxy layer. |

> 💡 **Tip:** Use `_Bloom` with high-emission post-processing bloom to get an “infinite cosmic glow” effect.
