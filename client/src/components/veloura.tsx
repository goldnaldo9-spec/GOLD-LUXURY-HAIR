import { Link } from "wouter";
import { ArrowRight, Heart, Menu, Minus, Plus, ShoppingBag, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { formatPrice, type Product } from "@/lib/catalog";
import { useCart } from "@/lib/store";

export function SiteHeader({ onCart }: { onCart: () => void }) {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  return <>
    <div className="announcement">Complimentary worldwide delivery on orders over £500 <span>•</span> Private appointments now open</div>
    <header className="site-header">
      <div className="header-inner">
        <button className="icon-button mobile-menu" onClick={() => setOpen((v) => !v)} aria-label="Open menu"><Menu size={20} strokeWidth={1.5} /></button>
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}><span className="wordmark-mark">G</span><span>GOLD LUXURY HAIR</span></Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <a href="/#collections" onClick={() => setOpen(false)}>Collections</a>
          <Link href="/book" onClick={() => setOpen(false)}>Consultation</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Our story</Link>
        </nav>
        <div className="header-actions">
          <Link href="/account" className="header-text-link">Account</Link>
          <button className="icon-button" aria-label="Wishlist"><Heart size={18} strokeWidth={1.5} /></button>
          <button className="bag-button" onClick={onCart} aria-label="Open shopping bag"><ShoppingBag size={18} strokeWidth={1.5} /><span>{itemCount}</span></button>
        </div>
      </div>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-quote">“Hair, considered.”</div>
    <div className="footer-grid">
      <div><div className="footer-brand">GOLD LUXURY HAIR</div><p>Human hair, elevated. A private edit of pieces made to move with you.</p><a className="footer-link" href="mailto:hello@goldluxuryhair.com">hello@goldluxuryhair.com</a></div>
      <div><div className="footer-label">Explore</div><Link href="/shop">Shop all</Link><Link href="/shop?category=New%20arrivals">New arrivals</Link><Link href="/custom">Made-to-measure</Link><Link href="/book">Book a consultation</Link></div>
      <div><div className="footer-label">Client care</div><Link href="/contact">Contact</Link><Link href="/shipping">Shipping & returns</Link><Link href="/care">Hair care guide</Link><Link href="/faq">FAQ</Link></div>
      <div><div className="footer-label">Follow the atelier</div><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://wa.me/440000000000" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:hello@goldluxuryhair.com">Email us</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 GOLD LUXURY HAIR</span><span>Privacy · Terms · Cookies</span><span>Made with intention in London</span></div>
  </footer>;
}

export function ProductCard({ product, onAdd }: { product: Product; onAdd?: () => void }) {
  const { addItem } = useCart();
  const [saved, setSaved] = useState(false);
  return <article className="product-card">
    <div className="product-image-wrap"><Link href={`/product/${product.slug}`}><img src={product.image} alt={product.name} className="product-image" /></Link>{product.badge && <span className="product-badge">{product.badge}</span>}<button className={`save-button ${saved ? "saved" : ""}`} onClick={() => setSaved((v) => !v)} aria-label="Save product"><Heart size={17} fill={saved ? "currentColor" : "none"} /></button><button className="quick-add" onClick={() => { addItem(product); onAdd?.(); }}>Add to bag <ArrowRight size={14} /></button></div>
    <div className="product-meta"><div><Link href={`/product/${product.slug}`} className="product-name">{product.name}</Link><div className="product-subtitle">{product.texture} · {product.length}</div></div><div className="product-price">{formatPrice(product.price)}</div></div>
  </article>;
}

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  if (!open) return null;
  return <div className="drawer-overlay" onClick={onClose}><aside className="cart-drawer" onClick={(e) => e.stopPropagation()}><div className="drawer-head"><div><div className="eyebrow">Your selection</div><h2>Shopping bag <span>({items.length})</span></h2></div><button className="icon-button" onClick={onClose} aria-label="Close shopping bag"><X size={20} /></button></div>{items.length === 0 ? <div className="empty-cart"><ShoppingBag size={30} strokeWidth={1} /><p>Your bag is waiting for something exceptional.</p><Link href="/shop" className="button button-dark" onClick={onClose}>Explore the edit <ArrowRight size={16} /></Link></div> : <><div className="cart-items">{items.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div className="cart-item-info"><div className="cart-item-top"><div><div className="product-name">{item.name}</div><div className="product-subtitle">{item.length} · {item.texture}</div></div><button className="remove-link" onClick={() => removeItem(item.id)}>Remove</button></div><div className="cart-item-bottom"><div className="quantity-stepper"><button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={13} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={13} /></button></div><strong>{formatPrice(item.price * item.quantity)}</strong></div></div></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Shipping and taxes calculated at checkout.</p><button className="button button-dark full-width" onClick={() => alert("Stripe Checkout is ready to connect when the managed payment integration is enabled.")}>Continue to checkout <ArrowRight size={16} /></button><button className="continue-link" onClick={onClose}>Continue shopping</button></div></>}</aside></div>;
}

export function SectionHeading({ eyebrow, title, copy, link }: { eyebrow: string; title: string; copy?: string; link?: { label: string; href: string } }) {
  return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>{link && <Link href={link.href} className="text-link">{link.label} <ArrowRight size={15} /></Link>}</div>;
}

export function TrustStrip() {
  return <div className="trust-strip"><div><Sparkles size={16} /><span>Thoughtfully sourced</span></div><div><span className="trust-line" /><span>Made to order</span></div><div><span className="trust-line" /><span>Worldwide delivery</span></div><div><span className="trust-line" /><span>One-to-one care</span></div></div>;
}
