---
id: usage
title: Usage
---

# Using the Grid Shader

## Setup
1. Import the Grid Shader package.  
2. Verify your license by going to the shader inspector and clicking **"Verify License"**. 
3. Apply it to your object.

## Key Settings
- **_Zoom:** Controls grid density.  
- **_WorldPosAndZoom:** Locks grid to world position for seamless tiling.  
- **_GradientEnabled:** Enables color blending between `_GradCol1` and `_GradCol2`.  
- **_RainbowEnabled:** Activates automatic hue cycling — try `_SpiralEnabled` for motion.  
- **_AlphaMaskEnabled:** Uses external texture to define visibility.  
- **_DepthParallaxEnabled:** Adds depth-based distortion — great for holographic floors.  
- **_GridGlideEnabled:** Animates tiles sliding across the surface.  

## Example Configurations
### Neon
```text
_GridTex: gridpattern.png  
_Color: (0, 1, 1, 1)  
_RainbowEnabled: Off  
_GradientEnabled: On  
_GradCol1: Cyan  
_GradCol2: Blue  
_DepthParallaxEnabled: Off
