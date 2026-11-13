import { useState, useEffect, useRef } from "react"
import "./App.css"

const categories = [
  { id: "all", label: "All Works" },
  { id: "architecture", label: "Architecture & Riads" },
  { id: "travel", label: "Destinations & Travel" },
  { id: "editorial", label: "Editorial & People" },
  { id: "craft", label: "Craftsmanship & Art" },
  { id: "nature", label: "Nature & Wildlife" },
]

const heroMonograph = {
  id: "hero",
  title: "The Menara Pavilions",
  category: "architecture",
  categoryLabel: "Landscape & Architecture",
  location: "Marrakech, Morocco",
  year: "2026",
  image: "/images/portfolio/menara-reflection.jpeg",
  aspect: "aspect-wide",
  caption: "Saadian water reservoir reflecting the 12th-century pavilion against an expansive Marrakech sky. An interactive 3D living capture exploring reflection, symmetry, and stillness.",
  origin: { x: "50%", y: "50%" },
}

const portfolioItems = [
  {
    id: "01",
    title: "Sanctuary Within",
    category: "architecture",
    categoryLabel: "Architecture & Riads",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-portrait",
    image: "/images/portfolio/riad-sanctuary.jpeg",
    caption: "Perspective looking through an ancient painted cedar portal into a tranquil riad courtyard paved with intricate zellij tilework.",
    origin: { x: "15%", y: "20%" },
  },
  {
    id: "02",
    title: "The Protocol Exchange",
    category: "editorial",
    categoryLabel: "Editorial & People",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/diplomatic-delegation-handshake.jpg",
    caption: "Official institutional delegation handshake documented in natural Moroccan sunlight, capturing the protocol, presence, and atmosphere of public diplomacy.",
    origin: { x: "85%", y: "80%" },
  },
  {
    id: "03",
    title: "The Ochre Threshold",
    category: "architecture",
    categoryLabel: "Moroccan Heritage",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/ochre-door-palm.jpeg",
    caption: "Studded wooden door set into sun-baked rammed earth walls, framed by the silhouette of a solitary date palm.",
    origin: { x: "30%", y: "90%" },
  },
  {
    id: "04",
    title: "The Master Zouak",
    category: "craft",
    categoryLabel: "Craftsmanship & Detail",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-portrait",
    image: "/images/portfolio/zouak-wood-craft.jpeg",
    caption: "Macro focus on hand-painted Moroccan Zouak woodwork patterns paired with hand-forged antique iron hardware.",
    origin: { x: "70%", y: "15%" },
  },
  {
    id: "05",
    title: "Bouquet of Welcome",
    category: "editorial",
    categoryLabel: "Culture & Ceremonies",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-portrait",
    image: "/images/portfolio/ceremony-flower-reception.jpg",
    caption: "Traditional ceremonial reception featuring an elaborate presentation of roses and handcrafted white caftan embroidery.",
    origin: { x: "50%", y: "30%" },
  },
  {
    id: "06",
    title: "Echoes of the Sultan",
    category: "architecture",
    categoryLabel: "Palace Architecture",
    location: "Bahia Palace, Marrakech",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/bahia-palace-stucco.jpeg",
    caption: "Carved stucco friezes and jewel-toned stained glass clerestory windows illuminating the grand halls of Bahia Palace.",
    origin: { x: "80%", y: "20%" },
  },
  {
    id: "07",
    title: "Emerald Gaze",
    category: "nature",
    categoryLabel: "Portraits in Solitude",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-tall",
    image: "/images/portfolio/emerald-gaze-cat.webp",
    caption: "Natural portrait of a young cat with striking green eyes, captured with subtle ambient light and shallow depth of field.",
    origin: { x: "50%", y: "50%" },
  },
  {
    id: "08",
    title: "The Director's Frame",
    category: "editorial",
    categoryLabel: "Documentary & Cinema",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/film-set-production.jpg",
    caption: "On-location documentary filming with director, sound engineer, and cinema camera setup in a shaded courtyard.",
    origin: { x: "20%", y: "70%" },
  },
  {
    id: "09",
    title: "The Golden Meridian",
    category: "travel",
    categoryLabel: "Destinations & Travel",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/urban-sunset-perspective.webp",
    caption: "Low-angle leading line composition guiding the eye directly toward a blazing sunset horizon flanked by palm silhouettes.",
    origin: { x: "50%", y: "90%" },
  },
  {
    id: "10",
    title: "The Nocturnal Citadel",
    category: "architecture",
    categoryLabel: "Historic Architecture",
    location: "Atlas Foothills, Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/kasbah-night-citadel.webp",
    caption: "Ramparts of an ancient hilltop kasbah fortress warmly illuminated against the deep sapphire tones of twilight.",
    origin: { x: "50%", y: "30%" },
  },
  {
    id: "11",
    title: "Light in the Alcove",
    category: "craft",
    categoryLabel: "Interior & Atmosphere",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/brass-lantern-palace.jpeg",
    caption: "Traditional Moroccan brass lantern with stained glass facets hanging beneath an exquisitely painted botanical ceiling.",
    origin: { x: "50%", y: "50%" },
  },
  {
    id: "12",
    title: "Woven Light",
    category: "craft",
    categoryLabel: "Architectural Details",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-portrait",
    image: "/images/portfolio/iron-moucharabieh-window.jpeg",
    caption: "Arched wrought-iron moucharabieh grille inset with colored stained glass, framing the passage of natural daylight.",
    origin: { x: "50%", y: "15%" },
  },
  {
    id: "13",
    title: "The Desert Sovereign",
    category: "nature",
    categoryLabel: "Fauna & Landscapes",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/desert-camel-portrait.webp",
    isDiptych: true,
    halfLeft: "/images/portfolio/desert-camel-portrait.webp",
    halfRight: "/images/portfolio/desert-camel-plate-rear.jpg",
    modalImage: "/images/portfolio/desert-camel-full-diptych.jpg",
    caption: "An archival dual-plate monograph assembled from two contiguous captures, capturing the complete anatomy and majestic presence of the desert dromedary.",
    origin: { x: "25%", y: "40%" },
  },
  {
    id: "14",
    title: "Approaching the Red City",
    category: "travel",
    categoryLabel: "Destinations & Travel",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/flight-over-marrakech.jpeg",
    caption: "Commercial aircraft on low final approach passing above historical palms and the stone entrance gates of Marrakech.",
    origin: { x: "40%", y: "45%" },
  },
  {
    id: "15",
    title: "The Loom of the Atlas",
    category: "craft",
    categoryLabel: "Artisanal Heritage",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/berber-loom-weaving.webp",
    caption: "Traditional Berber carpet loom strung with pure wool threads, accompanied by hand-woven textiles and brass weaving combs.",
    origin: { x: "75%", y: "50%" },
  },
  {
    id: "16",
    title: "Solitude at Dusk",
    category: "travel",
    categoryLabel: "Fine Art Landscapes",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/tree-sunset-silhouette.webp",
    caption: "Silhouette of a solitary olive tree crowned by the setting sun, fading into pure atmospheric gradient.",
    origin: { x: "50%", y: "60%" },
  },
  {
    id: "17",
    title: "Steed of the Plain",
    category: "nature",
    categoryLabel: "Nature & Wildlife",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/moroccan-horse-meadow.webp",
    caption: "Chestnut horse grazing peacefully in a lush spring pasture surrounded by ancient olive groves.",
    origin: { x: "35%", y: "65%" },
  },
  {
    id: "18",
    title: "Shadow & Inscription",
    category: "craft",
    categoryLabel: "Heritage & Calligraphy",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/shadow-calligraphy-frieze.jpeg",
    caption: "Chiaroscuro study of carved Arabic plaster inscriptions gently highlighted by a glowing glass lantern.",
    origin: { x: "60%", y: "30%" },
  },
  {
    id: "19",
    title: "Dove at the Fountain",
    category: "nature",
    categoryLabel: "Nature & Spaces",
    location: "Marrakech, Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/riad-dove-fountain.webp",
    caption: "Solitary dove pausing at the marble lip of a riad fountain strewn with floating bougainvillea petals.",
    origin: { x: "45%", y: "50%" },
  },
  {
    id: "20",
    title: "Script in Gold & Charcoal",
    category: "craft",
    categoryLabel: "Contemporary Visual Art",
    location: "Morocco",
    year: "2026",
    aspect: "aspect-square",
    image: "/images/portfolio/arabic-calligraphy-canvas.jpeg",
    caption: "Contemporary canvas painting exploring rhythmic Arabic calligraphy on textured ochre and gold ground.",
    origin: { x: "50%", y: "50%" },
  },
]

const currentYear = new Date().getFullYear()

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeModalIndex, setActiveModalIndex] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [camelJoined, setCamelJoined] = useState(false)
  const [protectionNotice, setProtectionNotice] = useState(null)

  const triggerProtectionNotice = (customMsg) => {
    setProtectionNotice(
      customMsg || "© HOUSSAM SAFIE · ALL RIGHTS RESERVED. UNAUTHORIZED DOWNLOADING & SCREENSHOTS RESTRICTED."
    )
    if (window.protectionNoticeTimer) {
      clearTimeout(window.protectionNoticeTimer)
    }
    window.protectionNoticeTimer = setTimeout(() => {
      setProtectionNotice(null)
    }, 3200)
  }

  // 3D Motion State for Menara
  const [menaraTilt, setMenaraTilt] = useState({
    rotX: 0,
    rotY: 0,
    glareX: 50,
    glareY: 50,
    isHovering: false,
  })

  // 3D Motion State & Controls for Cinema Reel
  const [cinemaTilt, setCinemaTilt] = useState({
    rotX: 0,
    rotY: 0,
    glareX: 50,
    glareY: 50,
    isHovering: false,
  })
  const [isCinemaMuted, setIsCinemaMuted] = useState(true)
  const [isCinemaPlaying, setIsCinemaPlaying] = useState(true)
  const cinemaVideoRef = useRef(null)

  const handleCinemaMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setCinemaTilt({
      rotX: (0.5 - py) * 12,
      rotY: (px - 0.5) * 12,
      glareX: px * 100,
      glareY: py * 100,
      isHovering: true,
    })
  }

  const handleCinemaMouseLeave = () => {
    setCinemaTilt({
      rotX: 0,
      rotY: 0,
      glareX: 50,
      glareY: 50,
      isHovering: false,
    })
  }

  const toggleCinemaAudio = (e) => {
    e.stopPropagation()
    if (cinemaVideoRef.current) {
      cinemaVideoRef.current.muted = !cinemaVideoRef.current.muted
      setIsCinemaMuted(cinemaVideoRef.current.muted)
    }
  }

  const toggleCinemaPlay = (e) => {
    e.stopPropagation()
    if (cinemaVideoRef.current) {
      if (cinemaVideoRef.current.paused) {
        const playPromise = cinemaVideoRef.current.play()
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {})
        }
        setIsCinemaPlaying(true)
      } else {
        cinemaVideoRef.current.pause()
        setIsCinemaPlaying(false)
      }
    }
  }

  const handleCinemaFullscreen = (e) => {
    e.stopPropagation()
    if (cinemaVideoRef.current) {
      if (cinemaVideoRef.current.requestFullscreen) {
        cinemaVideoRef.current.requestFullscreen().catch(() => {})
      } else if (cinemaVideoRef.current.webkitRequestFullscreen) {
        cinemaVideoRef.current.webkitRequestFullscreen()
      }
    }
  }

  // Global Image Protection & Copyright Enforcement
  useEffect(() => {
    // 1. Prevent Right-Click on entire site / images
    const handleContextMenu = (e) => {
      e.preventDefault()
      triggerProtectionNotice("RIGHT-CLICK DISABLED · ALL IMAGERY IS COPYRIGHT PROTECTED")
    }

    // 2. Prevent Drag-and-Drop saving of images
    const handleDragStart = (e) => {
      e.preventDefault()
      triggerProtectionNotice("IMAGE DRAG RESTRICTED · LICENSED INTELLECTUAL PROPERTY")
    }

    // 3. Prevent Copying of protected assets
    const handleCopy = (e) => {
      const selection = window.getSelection()?.toString()
      if (selection && selection.includes("@")) return
      e.preventDefault()
      triggerProtectionNotice("CONTENT COPYING RESTRICTED · © HOUSSAM SAFIE")
    }

    // 4. Intercept Save, Print, DevTools & Screenshot keyboard shortcuts
    const handleProtectionKeyDown = (e) => {
      // Save Page (Cmd+S or Ctrl+S)
      if ((e.metaKey || e.ctrlKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault()
        triggerProtectionNotice("PAGE SAVING DISABLED · ALL HIGH-RES PLATES ARE ENCRYPTED")
      }
      // Print Page (Cmd+P or Ctrl+P)
      if ((e.metaKey || e.ctrlKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault()
        triggerProtectionNotice("PRINTING RESTRICTED · PROTECTED ARCHIVE")
      }
      // Developer Tools / Source view (F12, Ctrl+U, Cmd+Alt+I)
      if (
        e.key === "F12" ||
        ((e.metaKey || e.ctrlKey) && (e.key === "u" || e.key === "U")) ||
        ((e.metaKey || e.ctrlKey) && (e.shiftKey || e.altKey) && (e.key === "i" || e.key === "I" || e.key === "c" || e.key === "C" || e.key === "j" || e.key === "J"))
      ) {
        e.preventDefault()
      }
      // PrintScreen Key
      if (e.key === "PrintScreen") {
        e.preventDefault()
        triggerProtectionNotice("SCREENSHOT RESTRICTED · LICENSED EDITORIAL PORTFOLIO")
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText("© HOUSSAM SAFIE · ALL RIGHTS RESERVED.").catch(() => {})
        }
      }
    }

    window.addEventListener("contextmenu", handleContextMenu)
    window.addEventListener("dragstart", handleDragStart)
    window.addEventListener("copy", handleCopy)
    window.addEventListener("keydown", handleProtectionKeyDown)

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu)
      window.removeEventListener("dragstart", handleDragStart)
      window.removeEventListener("copy", handleCopy)
      window.removeEventListener("keydown", handleProtectionKeyDown)
    }
  }, [])

  // Header Scroll & Slide Motion State
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setIsScrolled(currentScrollY > 40)

          // Smooth slide behavior on scroll
          if (currentScrollY > 180 && currentScrollY > lastScrollYRef.current) {
            setShowHeader(false) // Scroll down: hide smoothly
          } else {
            setShowHeader(true) // Scroll up: slide down smoothly
          }
          lastScrollYRef.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory)

  // Keyboard navigation for Lightbox & Contact Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isContactModalOpen) {
          setIsContactModalOpen(false)
          return
        }
        if (activeModalIndex !== null) {
          setActiveModalIndex(null)
          return
        }
      }
      if (activeModalIndex !== null) {
        if (e.key === "ArrowRight") {
          setActiveModalIndex((prev) => (prev + 1) % filteredItems.length)
        } else if (e.key === "ArrowLeft") {
          setActiveModalIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeModalIndex, isContactModalOpen, filteredItems.length])

  // Diptych auto-merge dramatic animation sequence
  useEffect(() => {
    if (activeModalIndex !== null && activeModalIndex !== -1) {
      const item = filteredItems[activeModalIndex]
      if (item?.isDiptych) {
        setCamelJoined(false)
        const timer = setTimeout(() => {
          setCamelJoined(true)
        }, 850)
        return () => clearTimeout(timer)
      }
    }
  }, [activeModalIndex, filteredItems])

  // Dynamic color reveal mouse handler
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty("--cursor-x", `${x.toFixed(1)}%`)
    e.currentTarget.style.setProperty("--cursor-y", `${y.toFixed(1)}%`)
  }

  // Menara 3D Interactive Motion Tracking
  const handleMenaraMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    // 3D tilt calculation
    const rotY = (px - 0.5) * 15 // left-right tilt
    const rotX = (0.5 - py) * 15 // up-down tilt
    setMenaraTilt({
      rotX,
      rotY,
      glareX: px * 100,
      glareY: py * 100,
      isHovering: true,
    })
  }

  const handleMenaraMouseLeave = () => {
    setMenaraTilt({
      rotX: 0,
      rotY: 0,
      glareX: 50,
      glareY: 50,
      isHovering: false,
    })
  }

  const handleMenaraTouchMove = (e) => {
    if (!e.touches || !e.touches[0]) return
    const rect = e.currentTarget.getBoundingClientRect()
    const touch = e.touches[0]
    const px = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width))
    const py = Math.max(0, Math.min(1, (touch.clientY - rect.top) / rect.height))
    setMenaraTilt({
      rotX: (0.5 - py) * 18,
      rotY: (px - 0.5) * 18,
      glareX: px * 100,
      glareY: py * 100,
      isHovering: true,
    })
  }

  const activePhoto =
    activeModalIndex !== null && activeModalIndex !== -1
      ? filteredItems[activeModalIndex]
      : null

  return (
    <>
      {/* Sticky Editorial Header with Smooth Slide-Down Motion */}
      <header
        className={`site-header ${isScrolled ? "scrolled" : ""} ${!showHeader ? "header-hidden" : ""}`}
      >
        <a href="#" className="brand" aria-label="Houssam Safie Homepage">
          <span className="brand-name">HOUSSAM SAFIE</span>
          <span className="brand-title">PHOTOGRAPHY</span>
        </a>

        <nav className="navigation" aria-label="Main navigation">
          <a href="#work" className="nav-link">Work</a>
          <a href="#motion" className="nav-link">Motion</a>
          <a href="#about" className="nav-link">About</a>
          <button
            type="button"
            className="nav-link nav-btn-link"
            onClick={() => setIsContactModalOpen(true)}
          >
            Contact
          </button>
        </nav>
      </header>

      <main>
        {/* Intro / Manifesto */}
        <section className="intro">
          <div className="intro-badge">
            <span className="badge-dot" />
            <span>EDITORIAL &amp; ARCHITECTURAL PHOTOGRAPHER</span>
          </div>

          <div className="intro-viewfinder-frame">
            {/* Minimalist Camera Viewfinder Optical Corners */}
            <span className="viewfinder-corner top-left" aria-hidden="true" />
            <span className="viewfinder-corner top-right" aria-hidden="true" />
            <span className="viewfinder-corner bottom-left" aria-hidden="true" />
            <span className="viewfinder-corner bottom-right" aria-hidden="true" />

            {/* Subtle Optical Telemetry Header */}
            <div className="viewfinder-hud" aria-hidden="true">
              <span className="hud-metric">OPTICAL FIELD · 50MM F/1.4</span>
              <span className="hud-target"><span className="target-reticle" />FOCUS LOCKED</span>
              <span className="hud-metric">1/500S · ISO 100</span>
            </div>

            <h1 className="intro-heading photography-focus-reveal">
              <span className="heading-line">Sacred geometry,</span>
              <br />
              <span className="heading-line">
                shadow &amp; <span className="light-glow">Moroccan light.</span>
              </span>
            </h1>
          </div>

          <div className="intro-meta">
            <p className="intro-location">Based in Marrakech, Morocco · Available worldwide</p>
            <p className="intro-focus">
              Documenting architectural heritage, luxury hospitality, human stories, and cultural journeys with quiet international precision. Move your cursor over captures to awaken their natural spectrum.
            </p>
          </div>
        </section>

        {/* Featured Monograph Hero with 3D Video Parallax */}
        <section className="featured-section" aria-label="Featured Monograph">
          <div
            className="featured-card featured-card-3d-stage"
            onClick={() => setActiveModalIndex(-1)}
            onMouseMove={handleMenaraMouseMove}
            onMouseLeave={handleMenaraMouseLeave}
            onTouchMove={handleMenaraTouchMove}
            onTouchEnd={handleMenaraMouseLeave}
            style={{
              "--rot-x": `${menaraTilt.rotX.toFixed(2)}deg`,
              "--rot-y": `${menaraTilt.rotY.toFixed(2)}deg`,
              "--glare-x": `${menaraTilt.glareX.toFixed(1)}%`,
              "--glare-y": `${menaraTilt.glareY.toFixed(1)}%`,
              "--glare-opacity": menaraTilt.isHovering ? "1" : "0",
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveModalIndex(-1)}
          >
            <div className="featured-card-3d-inner">
              <div className="featured-image-wrapper">
                {/* 3D Depth Specular Glare */}
                <div className="featured-specular-glare" />

                {/* Living Camera Motion / 3D Cinematic Water Reflection */}
                <img
                  src={heroMonograph.image}
                  alt={heroMonograph.title}
                  className="featured-img featured-img-living"
                  loading="eager"
                  decoding="async"
                />

                <div className="menara-3d-indicator">
                  <span className="indicator-pulse" />
                  <span>3D INTERACTIVE MONOGRAPH · MOVE CURSOR / DRAG</span>
                </div>

                <div className="image-overlay">
                  <span className="view-text">VIEW FULL CAPTURE ↗</span>
                </div>
              </div>

              <div className="featured-caption">
                <div>
                  <span className="featured-tag">FEATURED MONOGRAPH · MARRAKECH</span>
                  <h3 className="featured-title">{heroMonograph.title}</h3>
                  <p className="featured-sub-caption">{heroMonograph.caption}</p>
                </div>
                <div className="featured-details">
                  <span className="featured-cat">{heroMonograph.categoryLabel}</span>
                  <span className="featured-loc">{heroMonograph.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section with Category Filters */}
        <section className="work-section" id="work">
          <div className="work-section-top">
            <div className="section-title-block">
              <span className="section-subtitle">PORTFOLIO ARCHIVE</span>
              <h2 className="section-title">Selected Works</h2>
            </div>

            {/* Category Filter Bar */}
            <div className="category-filter-bar" role="tablist" aria-label="Portfolio Categories">
              {categories.map((cat) => {
                const count =
                  cat.id === "all"
                    ? portfolioItems.length
                    : portfolioItems.filter((i) => i.category === cat.id).length
                return (
                  <button
                    key={cat.id}
                    className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    role="tab"
                    aria-selected={selectedCategory === cat.id}
                  >
                    <span>{cat.label}</span>
                    <span className="filter-count">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Editorial Grid with Chromatic Wave Reveal */}
          <div className="projects-grid">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className={`project-card ${item.aspect}`}
                onClick={() => setActiveModalIndex(index)}
                onMouseMove={handleMouseMove}
                style={{
                  "--origin-x": item.origin.x,
                  "--origin-y": item.origin.y,
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveModalIndex(index)}
              >
                <div className={`project-image-container ${item.aspect}`}>
                  {/* Monochromatic Fine-Art Base */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="project-image project-image-bw"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Full Color Magical Reveal Layer */}
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="project-image project-image-color"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="chromatic-prism-aurora" />

                  <span className="project-index-badge">{item.id}</span>
                  <div className="image-overlay">
                    <span className="view-text">VIEW CAPTURE ↗</span>
                  </div>
                </div>

                <div className="project-details">
                  <div className="project-primary">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-category">{item.categoryLabel}</p>
                  </div>
                  <div className="project-meta">
                    <span className="project-location">{item.location}</span>
                    <span className="project-year">{item.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Dedicated Motion & Aerial Section - American Editorial 3D Living Masterpiece */}
        <section className="featured-section cinema-showcase-section" id="motion" aria-label="Motion & Aerial Documentary">
          <div className="section-title-block cinema-header-title">
            <span className="section-subtitle">MOTION &amp; AERIAL DOCUMENTARY</span>
            <h2 className="section-title">Aviation &amp; Skydiving · Beni Mellal</h2>
            <p className="cinema-header-desc">
              Field documentary capture of dropzone flight operations and skydiving over the Atlas foothills.
            </p>
          </div>

          <div
            className="featured-card featured-card-3d-stage cinema-3d-card"
            onMouseMove={handleCinemaMouseMove}
            onMouseLeave={handleCinemaMouseLeave}
            style={{
              "--rot-x": `${cinemaTilt.rotX.toFixed(2)}deg`,
              "--rot-y": `${cinemaTilt.rotY.toFixed(2)}deg`,
              "--glare-x": `${cinemaTilt.glareX.toFixed(1)}%`,
              "--glare-y": `${cinemaTilt.glareY.toFixed(1)}%`,
              "--glare-opacity": cinemaTilt.isHovering ? "1" : "0",
            }}
          >
            <div className="featured-card-3d-inner cinema-card-inner">
              <div className="featured-image-wrapper cinema-video-wrapper">
                {/* 3D Dynamic Specular Glare */}
                <div className="featured-specular-glare" />

                {/* Real Living Video Loop */}
                <video
                  ref={cinemaVideoRef}
                  src="/videos/skydiving-beni-mellal.mp4"
                  autoPlay
                  loop
                  muted={isCinemaMuted}
                  playsInline
                  className="cinema-living-video"
                  onClick={toggleCinemaPlay}
                />

                {/* Minimalist Camera Viewfinder Optical Crosshair Corners */}
                <div className="cinema-viewfinder-hud" aria-hidden="true">
                  <span className="hud-corner top-left" />
                  <span className="hud-corner top-right" />
                  <span className="hud-corner bottom-left" />
                  <span className="hud-corner bottom-right" />
                  <div className="hud-center-crosshair">
                    <span className="cross-h" />
                    <span className="cross-v" />
                  </div>
                </div>

                {/* Live Recording Badge (Realistic HD Spec) */}
                <div className="menara-3d-indicator cinema-rec-badge">
                  <span className="cinema-rec-dot" />
                  <span>HD · BENI MELLAL AIRFIELD · 00:36</span>
                </div>

                {/* Refined Vector Icon Controls (Play, Audio, Fullscreen) */}
                <div className="cinema-hud-controls">
                  {/* Play / Pause Toggle Button */}
                  <button
                    type="button"
                    className="cinema-pill-btn"
                    onClick={toggleCinemaPlay}
                    aria-label={isCinemaPlaying ? "Pause Video" : "Play Video"}
                    title={isCinemaPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isCinemaPlaying ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 4v16l13-8z" />
                      </svg>
                    )}
                    <span>{isCinemaPlaying ? "PAUSE" : "PLAY"}</span>
                  </button>

                  {/* Audio Mute / Unmute Button */}
                  <button
                    type="button"
                    className={`cinema-pill-btn ${!isCinemaMuted ? "btn-active-audio" : ""}`}
                    onClick={toggleCinemaAudio}
                    aria-label={isCinemaMuted ? "Unmute Sound" : "Mute Sound"}
                    title={isCinemaMuted ? "Unmute Sound" : "Mute Sound"}
                  >
                    {isCinemaMuted ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                        <path d="M19 5a9.5 9.5 0 0 1 0 14" />
                      </svg>
                    )}
                    <span>{isCinemaMuted ? "UNMUTE" : "AUDIO ON"}</span>
                  </button>

                  {/* Expand Fullscreen Button */}
                  <button
                    type="button"
                    className="cinema-pill-btn cinema-fs-btn"
                    onClick={handleCinemaFullscreen}
                    aria-label="Fullscreen View"
                    title="Fullscreen View"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                    <span>EXPAND</span>
                  </button>
                </div>
              </div>

              {/* High-End Editorial Caption Bar (Tanveer Badal Standard) */}
              <div className="featured-caption cinema-editorial-caption">
                <div className="cinema-caption-main">
                  <span className="featured-tag">DOCUMENTARY MOTION · BENI MELLAL</span>
                  <h3 className="featured-title">Above the Plain · Beni Mellal Skydiving</h3>
                  <p className="featured-sub-caption">
                    Documenting aviation operations and skydiving over the Atlas foothills. Captured, edited, and color-graded by Houssam Safie with authentic airfield sound.
                  </p>
                </div>
                <div className="featured-details cinema-caption-details">
                  <span className="featured-cat">Aviation &amp; Skydiving</span>
                  <span className="featured-loc">Beni Mellal Airfield, Morocco · 2026</span>
                  <span className="cinema-spec-pill-text">1080p HD · 25 FPS · Rec.709 Master</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section featuring Artist Monograph Photo */}
        <section className="about-section" id="about">
          <div className="about-inner">
            <div className="about-portrait-col">
              <div className="artist-portrait-frame">
                <img
                  src="/images/portfolio/houssam-safie-portrait.jpg"
                  alt="Houssam Safie"
                  className="artist-portrait-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="artist-portrait-caption">
                  <span className="artist-name-tag">HOUSSAM SAFIE</span>
                  <span className="artist-role-tag">PHOTOGRAPHER &amp; CINEMATOGRAPHER</span>
                </div>
              </div>
            </div>

            <div className="about-content-col">
              <div className="about-badge-row">
                <span className="about-badge">BIOGRAPHY &amp; ART DIRECTION</span>
              </div>

              <h2 className="about-statement">
                Documenting Morocco through patience,
                <br />
                composition, and genuine presence.
              </h2>

              <div className="about-text-grid">
                <p className="about-body">
                  Houssam Safie is an editorial, architectural, and documentary photographer based in Marrakech, Morocco.
                  His visual practice is founded on an intimate understanding of Moroccan heritage — from the rhythmic geometry of carved stucco and Zouak painted woodwork, to the serene courtyard waters of historic riads and human gatherings.
                </p>
                <p className="about-body">
                  Rejecting fleeting visual noise, Houssam works with natural ambient light, intentional framing, and high-fidelity camera systems. His imagery is commissioned by international publications, luxury boutique hotels, architects, institutional events, and cultural brands seeking an authentic visual identity that honors culture and place.
                </p>
              </div>

              <div className="about-spec-grid">
                <div className="spec-item">
                  <span className="spec-title">CORE SPECIALTIES</span>
                  <p>Architectural Photography · Luxury Riads &amp; Hotels · Institutional &amp; Cultural Events · Editorial Monographs · Fine-Art Nature</p>
                </div>
                <div className="spec-item">
                  <span className="spec-title">BASE &amp; COMMISSIONS</span>
                  <p>Marrakech &amp; across Morocco · Available for international assignments and commercial projects worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer" id="contact">
          <div className="footer-top">
            <span className="footer-tagline">COMMISSIONS &amp; ASSIGNMENTS</span>
            <h2 className="footer-headline">Let’s craft an intentional visual narrative.</h2>
            <button
              type="button"
              className="contact-link contact-link-btn"
              onClick={() => setIsContactModalOpen(true)}
              aria-label="Open contact channels"
            >
              <span>houssamesafie@gmail.com</span>
              <span className="contact-arrow">↗</span>
            </button>
          </div>

          <div className="footer-bottom">
            <div className="footer-col">
              <span>© {currentYear} HOUSSAM SAFIE</span>
              <span className="footer-sub">PHOTOGRAPHY &amp; VISUAL STORYTELLING</span>
            </div>
            <div className="footer-col footer-col-center">
              <span>MARRAKECH · MOROCCO · WORLDWIDE</span>
              <span className="footer-sub">EDITORIAL · ARCHITECTURE · LUXURY HOSPITALITY</span>
            </div>
            <div className="footer-col footer-col-right">
              <a href="#" className="back-to-top">
                BACK TO TOP ↑
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Interactive Lightbox / Full-screen Studio View */}
      {activeModalIndex !== null && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModalIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-bar">
              <span className="modal-counter">
                {activeModalIndex === -1
                  ? "FEATURED MONOGRAPH"
                  : `${activeModalIndex + 1} / ${filteredItems.length}`}
              </span>
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalIndex(null)}
                aria-label="Close viewer"
              >
                ✕ ESC
              </button>
            </div>

            <div className="modal-main-stage">
              {activeModalIndex !== -1 && filteredItems.length > 1 && (
                <button
                  className="modal-nav-btn prev-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveModalIndex(
                      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
                    )
                  }}
                  aria-label="Previous capture"
                >
                  ←
                </button>
              )}

              {activePhoto?.isDiptych ? (
                <div className="diptych-modal-stage">
                  <div
                    className={`diptych-frame-cluster ${
                      camelJoined ? "diptych-joined" : "diptych-separated"
                    }`}
                  >
                    {/* Plate I: Forequarters */}
                    <div className="diptych-halve halve-front">
                      <span className="diptych-plate-label">PLATE I · FOREQUARTERS</span>
                      <img
                        src={activePhoto.halfLeft}
                        alt="Plate I: Forequarters"
                        className="diptych-img-half"
                        decoding="async"
                      />
                    </div>

                    {/* Architectural Hairline Gap */}
                    <div className="diptych-split-seam" />

                    {/* Plate II: Hindquarters */}
                    <div className="diptych-halve halve-rear">
                      <span className="diptych-plate-label">PLATE II · HINDQUARTERS</span>
                      <img
                        src={activePhoto.halfRight}
                        alt="Plate II: Hindquarters"
                        className="diptych-img-half"
                        decoding="async"
                      />
                    </div>

                    {/* Seamless Master Unified Panorama */}
                    <div
                      className={`diptych-master-fusion ${
                        camelJoined ? "fusion-active" : ""
                      }`}
                    >
                      <img
                        src={activePhoto.modalImage}
                        alt={activePhoto.title}
                        className="modal-img master-panoramic-img"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* American Editorial Gallery Switcher */}
                  <div className="diptych-switch-bar">
                    <button
                      type="button"
                      className={`diptych-switch-pill ${!camelJoined ? "active" : ""}`}
                      onClick={() => setCamelJoined(false)}
                    >
                      ARCHIVAL DIPTYCH (2 PLATES)
                    </button>
                    <button
                      type="button"
                      className={`diptych-switch-pill ${camelJoined ? "active" : ""}`}
                      onClick={() => setCamelJoined(true)}
                    >
                      ASSEMBLED PANORAMA
                    </button>
                  </div>
                  <span className="modal-watermark-tag">© HOUSSAM SAFIE · PROTECTED WORK</span>
                </div>
              ) : (
                <div className="modal-image-wrapper">
                  <img
                    src={
                      activeModalIndex === -1
                        ? heroMonograph.image
                        : (activePhoto.modalImage || activePhoto.image)
                    }
                    alt={activeModalIndex === -1 ? heroMonograph.title : activePhoto.title}
                    className="modal-img"
                    decoding="async"
                  />
                  <div className="modal-photo-shield" />
                  <span className="modal-watermark-tag">© HOUSSAM SAFIE · PROTECTED WORK</span>
                </div>
              )}

              {activeModalIndex !== -1 && filteredItems.length > 1 && (
                <button
                  className="modal-nav-btn next-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveModalIndex((prev) => (prev + 1) % filteredItems.length)
                  }}
                  aria-label="Next capture"
                >
                  →
                </button>
              )}
            </div>

            <div className="modal-caption-bar">
              <div className="modal-info">
                <span className="modal-cat">
                  {activeModalIndex === -1
                    ? heroMonograph.categoryLabel
                    : activePhoto.categoryLabel}
                </span>
                <h4 className="modal-title">
                  {activeModalIndex === -1 ? heroMonograph.title : activePhoto.title}
                </h4>
                <p className="modal-caption">
                  {activeModalIndex === -1
                    ? heroMonograph.caption
                    : activePhoto.caption}
                </p>
              </div>
              <div className="modal-meta">
                <span>
                  {activeModalIndex === -1
                    ? heroMonograph.location
                    : activePhoto.location}
                </span>
                <span>
                  {activeModalIndex === -1
                    ? heroMonograph.year
                    : activePhoto.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3D Realistic Smartphone Contact Modal */}
      {isContactModalOpen && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setIsContactModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="phone-3d-stage"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              type="button"
              className="phone-modal-close"
              onClick={() => setIsContactModalOpen(false)}
              aria-label="Close contact window"
            >
              ✕ ESC
            </button>

            {/* Realistic Flagship Smartphone Device Body */}
            <div className="phone-device">
              {/* Outer Metallic Titanium Frame & Hardware Buttons */}
              <div className="phone-hardware-buttons" aria-hidden="true">
                <span className="hw-button hw-action" />
                <span className="hw-button hw-vol-up" />
                <span className="hw-button hw-vol-down" />
                <span className="hw-button hw-power" />
              </div>

              {/* Glass Display & Screen */}
              <div className="phone-screen">
                {/* Specular Diagonal Light Sheen on Glass */}
                <div className="phone-glass-glare" aria-hidden="true" />

                {/* iPhone Status Bar */}
                <div className="phone-status-bar" aria-hidden="true">
                  <span className="phone-clock">09:41</span>
                  {/* Dynamic Island Notch */}
                  <div className="phone-dynamic-island">
                    <span className="island-camera" />
                    <span className="island-sensor" />
                  </div>
                  <div className="phone-status-icons">
                    <svg width="15" height="11" viewBox="0 0 17 11" fill="currentColor">
                      <rect x="0" y="8" width="2.5" height="3" rx="0.5"/>
                      <rect x="4" y="5.5" width="2.5" height="5.5" rx="0.5"/>
                      <rect x="8" y="3" width="2.5" height="8" rx="0.5"/>
                      <rect x="12" y="0.5" width="2.5" height="10.5" rx="0.5"/>
                    </svg>
                    <span className="stat-5g">5G</span>
                    <svg width="22" height="11" viewBox="0 0 25 12" fill="none" stroke="currentColor">
                      <rect x="0.5" y="0.5" width="21" height="11" rx="3" strokeWidth="1.2"/>
                      <rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor"/>
                      <path d="M23 4.5v3" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Screen Content UI */}
                <div className="phone-screen-content">
                  {/* Photographer Profile Header inside Phone */}
                  <div className="phone-contact-header">
                    <div className="phone-avatar-wrap">
                      <img
                        src="/images/portfolio/houssam-safie-portrait.jpg"
                        alt="Houssam Safie"
                        className="phone-avatar-img"
                        decoding="async"
                      />
                      <span className="avatar-status-badge" title="Available for projects" />
                    </div>
                    <span className="phone-tag">COMMISSIONS &amp; ASSIGNMENTS</span>
                    <h3 className="phone-contact-name">Houssam Safie</h3>
                    <p className="phone-contact-role">
                      Editorial &amp; Architectural Photography
                      <br />
                      Based in Marrakech · Worldwide
                    </p>
                  </div>

                  {/* Native iOS-style Contact Widget Cards */}
                  <div className="phone-actions-list">
                    {/* Option 1: WhatsApp Direct */}
                    <a
                      href="https://wa.me/212656673254?text=Hello%20Houssam%2C%20I%20would%20like%20to%20discuss%20a%20photography%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phone-action-item item-wa"
                    >
                      <div className="phone-action-icon icon-wa">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div className="phone-action-details">
                        <span className="action-title">WhatsApp Direct</span>
                        <span className="action-sub">+212 656 673 254</span>
                      </div>
                      <span className="action-arrow">↗</span>
                    </a>

                    {/* Option 2: Direct Voice Line */}
                    <a
                      href="tel:+212656673254"
                      className="phone-action-item item-phone"
                    >
                      <div className="phone-action-icon icon-phone">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                          <path d="M14.05 6A5 5 0 0 1 18 10" />
                        </svg>
                      </div>
                      <div className="phone-action-details">
                        <span className="action-title">Direct Voice Line</span>
                        <span className="action-sub">0656673254 / +212 (0) 656 673 254</span>
                      </div>
                      <span className="action-arrow">↗</span>
                    </a>

                    {/* Option 3: Email Inquiries */}
                    <div className="phone-action-item item-email">
                      <div className="phone-action-icon icon-email">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div className="phone-action-details">
                        <span className="action-title">Email Inquiries</span>
                        <a href="mailto:houssamesafie@gmail.com" className="action-email-link">
                          houssamesafie@gmail.com
                        </a>
                      </div>
                      <button
                        type="button"
                        className="phone-copy-btn"
                        onClick={() => {
                          if (navigator.clipboard?.writeText) {
                            navigator.clipboard.writeText("houssamesafie@gmail.com")
                          }
                          setEmailCopied(true)
                          setTimeout(() => setEmailCopied(false), 2400)
                        }}
                      >
                        {emailCopied ? "✓ COPIED" : "COPY"}
                      </button>
                    </div>
                  </div>

                  {/* Home Bar Indicator */}
                  <div className="phone-home-indicator" aria-hidden="true" />
                </div>
              </div>

              {/* Realistic Ambient 3D Shadow on Surface */}
              <div className="phone-shadow" aria-hidden="true" />
            </div>
          </div>
        </div>
      )}

      {/* Real-Time Protection Toast Alert */}
      {protectionNotice && (
        <div className="protection-toast" role="alert">
          <div className="protection-toast-inner">
            <span className="protection-toast-icon">🔒</span>
            <span className="protection-toast-text">{protectionNotice}</span>
          </div>
        </div>
      )}
    </>
  )
}
