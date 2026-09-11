# Background Video/GIF Specifications

## Current Implementation
The hero container uses a full-screen background video that:
- **Container**: `h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)]` with `rounded-2xl sm:rounded-3xl` and `overflow-hidden`
- **Video**: `absolute inset-0 w-full h-full object-cover pointer-events-none`
- **Overlay**: `absolute inset-0 bg-white/10` (white at 10% opacity)

## Recommended Specifications

### Video (MP4/WebM)
| Property | Value |
|----------|-------|
| **Aspect Ratio** | 16:9 (or match viewport) |
| **Resolution** | 1920×1080 minimum (1080p) |
| **Recommended** | 2560×1440 (1440p) or 3840×2160 (4K) |
| **Duration** | 10–30 seconds (seamless loop) |
| **Frame Rate** | 30 fps |
| **Codec** | H.264 (MP4) + VP9 (WebM fallback) |
| **Bitrate** | 2–5 Mbps (1080p), 8–15 Mbps (4K) |
| **File Size** | < 10 MB ideal, < 25 MB max |
| **Audio** | None (muted) |

### GIF Alternative
| Property | Value |
|----------|-------|
| **Aspect Ratio** | 16:9 |
| **Resolution** | 1280×720 minimum |
| **Frame Rate** | 15–20 fps |
| **Colors** | 256 (GIF limit) |
| **Duration** | 5–15 seconds |
| **File Size** | < 5 MB (heavily compressed) |
| **Loop** | Infinite |

### Poster Image (Fallback)
| Property | Value |
|----------|-------|
| **Resolution** | 1920×1080 |
| **Format** | JPG/WebP |
| **Quality** | 60–80% |
| **Purpose** | Shows while video loads |

## Container Behavior
The video/GIF is clipped by the hero container's `border-radius` and `overflow-hidden`. The dashboard preview at the bottom **bleeds out** of the rounded container — this is intentional.

When replacing:
1. Keep the same `object-cover` behavior (fills container, crops edges)
2. Ensure seamless loop (first frame = last frame)
3. Test on mobile (container height = `calc(100vh-24px)`)
4. Test on desktop (container height = `calc(100vh-32px)`)

## File Placement
Place new assets in:
```
/public/images/
  ├── hero-background.mp4
  ├── hero-background.webm      (optional fallback)
  ├── hero-poster.jpg           (fallback image)
  └── hero-background.gif       (if using GIF instead)
```

## Usage in Code (src/app/App.tsx)
```tsx
<video
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  autoPlay
  loop
  muted
  playsInline
  disableRemotePlayback
  poster="/images/hero-poster.jpg"
>
  <source src="/images/hero-background.mp4" type="video/mp4" />
  <source src="/images/hero-background.webm" type="video/webm" />
</video>
```

## Testing Checklist
- [ ] Video loops seamlessly (no visible jump)
- [ ] File size acceptable for web delivery
- [ ] Poster image shows instantly on load
- [ ] Rounded corners clip correctly on all breakpoints
- [ ] Dashboard cards still bleed out bottom correctly
- [ ] Mobile performance acceptable (test on 3G throttle)
- [ ] `prefers-reduced-motion` respected (optional: pause animation)