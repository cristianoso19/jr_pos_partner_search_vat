# -*- coding: utf-8 -*-
{
    "name": "POS - Buscar clientes por Cédula/RUC (VAT)",
    "version": "17.0.1.0.0",
    "category": "Point of Sale",
    "summary": "Permite buscar clientes en POS por VAT (cédula/RUC) y referencia.",
    "depends": ["point_of_sale"],
    "assets": {
        "point_of_sale.assets": [
            "pos_partner_search_vat/static/src/js/pos_partner_search_vat.js",
        ],
    },
    "installable": True,
    "application": False,
    "license": "LGPL-3",
}
