import React from 'react';
import { ShieldCheck, Droplets, Leaf } from 'lucide-react'; // Ajustado si no existe en proyecto

const ProductDetails = ({ product }) => {
    return (
        <section className="details-section" style={{ '--theme-primary': product.theme.primary, '--theme-secondary': product.theme.secondary }}>

            {/* Tarjeta de Beneficios */}
            {product.benefits && product.benefits.length > 0 && (
                <article className="glass-card">
                    <h2 className="card-title">
                        <ShieldCheck size={28} />
                        Beneficios Clave
                    </h2>
                    <ul className="benefit-list">
                        {product.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </article>
            )}

            {/* Tarjeta de Dosis / Aplicación */}
            {product.dosis && product.dosis.length > 0 && (
                <article className="glass-card">
                    <h2 className="card-title">
                        <Droplets size={28} />
                        Dosis y Aplicación
                    </h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Cultivo / Uso</th>
                                    <th>Dosis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.dosis.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <strong>{item.crop}</strong>
                                            <br />
                                            <span style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>{item.details}</span>
                                        </td>
                                        <td>{item.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </article>
            )}

            {/* Tarjeta de Composición */}
            {product.composition && product.composition.length > 0 && (
                <article className="glass-card">
                    <h2 className="card-title">
                        <Leaf size={28} />
                        Composición
                    </h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Elemento</th>
                                <th>Porcentaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.composition.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.element}</td>
                                    <td>{item.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            )}

        </section>
    );
};

export default ProductDetails;
