import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/productsData';
import ProductHero from '../components/landing/ProductHero';
import ProductDetails from '../components/landing/ProductDetails';
import '../assets/styles/product-landing.css';
import { ArrowLeft } from 'lucide-react'; // Asuminos lucide-react, si no se cambiará

const ProductLandingPage = () => {
    const { slug } = useParams();

    // Buscar el producto en la "base de datos" local basándose en el slug de la URL
    const product = productsData.find(p => p.id === slug);

    useEffect(() => {
        // Si se encuentra el producto, cambiar el título de la página web
        if (product) {
            document.title = `${product.name} | BioNeural Solutions`;
            // Opcional: Desplazar hacia arriba al cargar
            window.scrollTo(0, 0);
        }
    }, [product]);

    // Si no se encuentra el producto por el slug (ID iválido o QR obsoleto)
    if (!product) {
        return (
            <div className="landing-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div className="landing-bg"></div>
                <div style={{ textAlign: 'center', zIndex: 10 }}>
                    <h1 className="hero-title" style={{ fontSize: '2rem' }}>Producto No Encontrado</h1>
                    <p className="hero-description">Lo sentimos, la página de este producto no existe o fue movida.</p>
                    <Link to="/" className="btn-premium btn-primary" style={{ display: 'inline-flex', maxWidth: '300px' }}>
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        );
    }

    // Render principal del Producto
    return (
        <div className="landing-container">
            {/* Fondo estelar y orbe de color dinámico basado en el producto */}
            <div className="landing-bg"></div>
            <div className="landing-glow" style={{ '--theme-primary': product.theme.primary }}></div>

            {/* Botón opcional de regreso arriba a la izquierda (Ocultar si es pure landing) */}
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 20 }}>
                <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    <span>Volver</span>
                </Link>
            </div>

            <ProductHero product={product} />

            <ProductDetails product={product} />

            {/* Footer minimalista para la landing */}
            <footer style={{ marginTop: 'auto', padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', zIndex: 10, backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
                <p>&copy; {new Date().getFullYear()} BioNeural Solutions. <br /><em>Tecnología Bio-Inteligente para el Agro</em></p>
            </footer>
        </div>
    );
};

export default ProductLandingPage;
