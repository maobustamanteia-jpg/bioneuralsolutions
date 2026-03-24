import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import '../assets/styles/labels.css';

const LabelGenerator = () => {
    const { slug } = useParams();

    // Find product
    const product = productsData.find((p) => p.id === slug);

    if (!product) {
        return <Navigate to="/" replace />;
    }

    // Set the specific label themes as CSS variables on the container
    const labelStyles = {
        '--label-primary': product.labelTheme?.primary || product.theme.primary,
        '--label-accent': product.labelTheme?.accent || product.theme.secondary,
        '--label-bg': product.labelTheme?.bg || '#ffffff'
    };

    useEffect(() => {
        // Modify body class or directly set background to hide standard UI if needed
        document.title = `Etiqueta - ${product.name} (19x20cm)`;
    }, [product]);

    return (
        <div className="label-generator-page">
            {/* The 19x20cm Canvas */}
            <div className="product-label-canvas" style={labelStyles}>

                {/* Header - Brand & Core Product Identity */}
                <div className="label-header">
                    <div className="label-title-wrapper">
                        <h1 className="label-product-name">{product.name}</h1>
                        <div className="label-category">{product.category}</div>
                    </div>
                    <div className="label-brand-logo">BioNeural Solutions</div>
                </div>

                {/* Left Column - Tech details & Benefits */}
                <div className="label-content-left">
                    <h2 className="label-section-title">Descripción</h2>
                    <p className="label-text-block">{product.description}</p>

                    <h2 className="label-section-title">Beneficios Clave</h2>
                    <ul className="label-list">
                        {product.benefits.slice(0, 4).map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>

                {/* Right Column - Composition & Usage */}
                <div className="label-content-right">
                    <h2 className="label-section-title">Composición Garantizada</h2>
                    <table className="label-table">
                        <thead>
                            <tr>
                                <th>Elemento</th>
                                <th>Porcentaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.composition && product.composition.length > 0 ? (
                                product.composition.map((comp, i) => (
                                    <tr key={i}>
                                        <td>{comp.element}</td>
                                        <td>{comp.percentage}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">Ver ficha técnica adjunta</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <h2 className="label-section-title">Recomendaciones de Uso</h2>
                    {product.dosis && product.dosis.length > 0 ? (
                        product.dosis.map((dItem, i) => (
                            <div key={i} style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: '#334155' }}>
                                <strong>{dItem.crop || "Uso"}:</strong> {dItem.rate}<br />
                                <em>{dItem.details}</em>
                            </div>
                        ))
                    ) : (
                        <p className="label-text-block">Consulte al ingeniero agrónomo de confianza para determinar la dosis adecuada según el cultivo.</p>
                    )}

                    <div style={{ marginTop: 'auto', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        Presentaciones: {product.presentations.join(', ')}
                    </div>
                </div>

                {/* Footer - QR & Legal */}
                <div className="label-footer">
                    <div className="label-mandatory-info">
                        VENTA POR PRESCRIPCIÓN DE UN INGENIERO AGRÓNOMO.<br />
                        MANTÉNGASE FUERA DEL ALCANCE DE LOS NIÑOS.
                    </div>
                    <div className="label-qr-placeholder">
                        <div>
                            [ESPACIO<br />QR 3x3 CMS]<br />
                            <span style={{ fontSize: '0.55rem', fontWeight: 'normal' }}>Escanear para Landing Page</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LabelGenerator;
