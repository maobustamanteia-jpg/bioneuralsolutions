import React from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react'; // Asuminos lucide-react, ajustaremos si no existe

const ProductHero = ({ product }) => {
    return (
        <header className="hero-wrapper" style={{ '--theme-primary': product.theme.primary, '--theme-secondary': product.theme.secondary }}>
            <div className="hero-tagline">{product.tagline}</div>
            <h1 className="hero-title">{product.name}</h1>
            <p className="hero-description">{product.description}</p>

            <div className="hero-image-container">
                <img src={product.images.hero} alt={`${product.commercialName} hero shot`} className="hero-image" />
            </div>

            <div className="cta-group">
                <a href={product.ctaLinks.buy} className="btn-premium btn-primary">
                    <ShoppingCart size={20} />
                    Comprar Ahora
                </a>
                <a href={product.ctaLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-premium btn-whatsapp">
                    <MessageCircle size={20} />
                    Contacto Asesor
                </a>
            </div>
        </header>
    );
};

export default ProductHero;
