---
id: properties
title: Properties
---

# Shader Properties

| Property | Type | Description |
|-----------|------|-------------|
| `_GridTex` | 2D | Base grid texture. |
| `_Color` | Color | Tint color for emission. |
| `_Zoom` | Range (0–10) | Scales or zooms the grid pattern. |
| `_WorldPosAndZoom` | Toggle | Uses world position to map the grid. |
| `_CameraDir` | Toggle | Scrolls the grid relative to camera direction. |
| `_Cull` | Enum | Sets face culling mode (Back/Front/Off). |
| `_GradientEnabled` | Toggle | Enables color blending between two gradient colors. |
| `_GradCol1` | Color | Gradient start color. |
| `_GradCol2` | Color | Gradient end color. |
| `_GradientWorldPos` | Toggle | Applies gradient based on world position instead of UV. |
| `_RainbowEnabled` | Toggle | Enables rainbow color cycling. |
| `_HueSpeed` | Range (0–3) | Speed of hue shifting. |
| `_SpiralEnabled` | Toggle | Adds spiral-based hue motion. |
| `_SpiralAxis` | Vector | Axis for spiral hue motion. |
| `_AlphaMaskEnabled` | Toggle | Enables use of alpha mask. |
| `_AlphaMaskTex` | 2D | Alpha mask texture. |
| `_GridGlideEnabled` | Toggle | Enables tile-gliding animation. |
| `_GridGlideAtlas` | 2D | Texture atlas for grid glide animation. |
| `_GridGlideTileCount` | Float | Number of tiles in grid glide. |
| `_GridGlideAmount` | Vector | Defines tile movement direction. |
| `_GridGlideSpeed` | Float | Controls glide animation speed. |
| `_DepthParallaxEnabled` | Toggle | Enables depth-based parallax offset. |
| `_DepthTexture` | 2D | Depth map for parallax effect. |
| `_DepthHeight` | Range (0.01–4) | Parallax depth intensity. |

> 💡 **Tip:** Enable only the features you need (rainbow, parallax, etc.) to reduce shader variant count.
