---
id: properties
title: Properties
---

# Shader Properties

| Property | Type | Description |
|-----------|------|-------------|
| `_MainTex` | 2D | Base texture for the hologram. |
| `_Alpha` | Float | Base transparency multiplier. |
| `_Color` | Color | Tint color of hologram glow. |
| `_FresnelPower` | Range (0.5–8) | Controls glow falloff. |
| `_ScanSpeed` | Float | Speed of scanline animation. |
| `_ScanIntensity` | Range (0–1) | Brightness of scanlines. |
| `_GlitchStrength` | Range (0–1) | Strength of screen flicker effect. |
| `_DistortionON` | Toggle | Enables vertex distortion. |
| `_DistortScale` | Float | Frequency of distortion waves. |
| `_DistortSpeed` | Float | Speed of distortion movement. |
| `_DistortionAmount` | Range (0–0.3) | Distortion strength. |
| `_FloatSpeed` | Float | Speed of vertical float movement. |
| `_FloatAmount` | Range (0–0.2) | Height of float movement. |
| `_GlitchChance` | Range (0–1) | Chance per frame to glitch. |
| `_GlitchAmount` | Float | Intensity of vertex glitch offset. |

> 💡 Use `_Color` for overall tint and adjust `_Alpha` to control transparency.
