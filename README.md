# POS – Búsqueda de Clientes por Cédula / RUC (VAT)
**Odoo 17.0 – Community**

Este módulo extiende la funcionalidad del **Punto de Venta (POS)** para permitir la
búsqueda de clientes no solo por nombre, sino también por:

- Cédula / RUC (campo **VAT**)
- Referencia interna
- Teléfono / Móvil
- Email

Sin modificar el core de Odoo.

---

## 📌 Problema

En **Odoo 17 Community**, el POS busca clientes únicamente por nombre.
Cuando el cajero intenta buscar por **cédula o RUC**, el cliente no aparece,
aunque esté correctamente registrado.

---

## ✅ Solución

Se extiende el **string de búsqueda de clientes del POS** para que indexe
campos adicionales como `vat`, `ref`, `phone`, `mobile` y `email`.

---

## 📂 Estructura del módulo

```text
pos_partner_search_vat/
├── __init__.py
├── __manifest__.py
└── static/
    └── src/
        └── js/
            └── pos_partner_search_vat.js
