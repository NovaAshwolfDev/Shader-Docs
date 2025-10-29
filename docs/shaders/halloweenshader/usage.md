---
id: usage
title: Usage
---

# Using the Halloween Shader

## 🧠 Setup
1. Import the Halloween Shader into your Unity project.
2. Create a new Material and assign the **"Halloween Shader"**.
3. Verify your license by going to the shader inspector and clicking **"Verify License"**. 
4. Apply it to your object.

## ⚙️ Configuration
- Adjust **_Speed** to control the vertical animation rate.
- Set **_Scale** to fine-tune gradient spacing.
- Enable **_OrangeGradient** for a fiery orange glow.
- Toggle **_UseAlpha** if your mask map includes an alpha channel.
- Increase **_EmissionMultiplier** for stronger brightness.

## 🌈 Mask Map Guidelines
- **White** areas glow fully.  
- **Black** areas stay dark.  
- If **_UseAlpha** is enabled, the **alpha channel** defines emission instead of red.

## 🎨 Example Workflow
1. Prepare a mask texture in Photoshop where bright areas represent glowing parts.  
2. Import it into Unity and assign it to `_MaskMap`.  
3. Adjust **_EmissionMultiplier** until you get the desired glow level.  

## 📦 VRChat Usage
- Compatible with VRChat SDK3 worlds and avatars.  
- Supports baked or realtime lighting.  
- Uses the Standard surface lighting model, so it works with most post-processing effects.
