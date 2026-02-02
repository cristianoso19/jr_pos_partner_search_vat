/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PosDB } from "@point_of_sale/app/store/db";

/**
 * Extiende el string de búsqueda de clientes para incluir:
 * - VAT (cédula/RUC)  -> partner.vat
 * - Referencia        -> partner.ref (opcional)
 * - Teléfono / móvil  -> partner.phone, partner.mobile (por si acaso)
 * - Email             -> partner.email
 */
patch(PosDB.prototype, {
    _partner_search_string(partner) {
        // Llama a la lógica original (nombre, barcode, etc.)
        const original = super._partner_search_string(partner);

        const vat = (partner.vat || "").trim();
        const ref = (partner.ref || "").trim();
        const phone = (partner.phone || "").trim();
        const mobile = (partner.mobile || "").trim();
        const email = (partner.email || "").trim();

        // Añadimos separadores para que el buscador los indexe bien
        // Odoo usa este string para crear el índice de búsqueda del POS.
        return `${original}|${vat}|${ref}|${phone}|${mobile}|${email}`;
    },
});
