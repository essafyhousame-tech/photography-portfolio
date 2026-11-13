import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Silently capture error in development or monitoring
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, errorInfo)
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            color: '#eaeaea',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '2.5rem',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Houssam Safie
          </span>
          <p
            style={{
              color: '#888',
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Portfolio archive is refreshing
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              background: 'transparent',
              color: '#eaeaea',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '999px',
              padding: '0.75rem 2rem',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Reload Portfolio ↺
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
