# Sistema de Producción Remoto y Control de Calidad Artesanal

**Objetivo:** Permitir que los Socios (en Bogotá) puedan auditar, registrar y asegurar la calidad de cada lote producido en El Fresno sin necesidad de supervisión física constante.

**Metodología:** Tecnología "Low-Cost" y procedimientos estandarizados (SOP - Standard Operating Procedures).

---

## 1. Estandarización de Fórmulas (Ingeniería de Planta)

El principal error artesanal es "hacer a ojo". Si tenemos tanques de 1.000 Litros, la fórmula se diseña para 1.000 Litros o fracciones exactas (500L, 250L). 

*   **Fichas de Producción por Tanque (Batch Records):** Cada producto (ej. Jabón Potásico) no tendrá una receta de "1 litro", sino una tabla estandarizada:
    *   *Receta Tanque 1 (1.000L):* X kg de aceite, Y kg de KOH, Z litros de agua.
*   **Identificación Visual:** Cada tanque debe tener un número pintado grande (TANQUE 1, TANQUE 2).
*   **Marcas de Nivel:** Pintar líneas en los tanques marcando 250L, 500L, 750L y 1000L. Así sabemos exactamente cuánto volumen hay solo con una foto.

## 2. El Sistema de Trazabilidad por Tally + N8N (Tus Ojos)

Vas a crear un formulario en **Tally.so** llamado "Bitácora de Producción". El operario (el amigo del tío), antes de irse de la fábrica, tiene que llenar esto desde su celular (obligatorio para que se le pague su día).

**El formulario pide:**
1.  ¿Qué producto se hizo hoy? (Desplegable)
2.  ¿En qué tanque? (1, 2, 3...)
3.  ¿Cuántos litros finales salieron?
4.  **Sube una foto de la balanza** con la materia prima pesada.
5.  **Sube una foto del tanque** lleno.
6.  **Sube una foto de la tira de pH** o de la lectura del termómetro.

**La magia de N8N:** Cuando el operario envía el formulario, N8N recibe los datos y manda automáticamente un mensaje a un **Grupo de WhatsApp de Socios** diciendo:
> 🟢 *"LOTE NUEVO: Hoy se produjeron 1000L de Jabón Potásico en el Tanque 2. pH registrado: 9. [Ver fotos de evidencia aquí]"*

De esta forma, tú y tu tío ven el reporte en su celular en tiempo real, con fotos, sin tener que ir a Fresno. Y si el pH está mal, o el color de la foto está raro, pueden decirle a Ángel (agrónomo): *"Ángel, mira la foto del tanque 2 en el grupo, se ve muy oscuro, ¿qué pasó?"*.

## 3. Equipamiento Artesanal pero Científico (Inversión Mínima)

Para que el operario mida y tú confíes, necesitas comprarle 3 cosas muy baratas pero exactas:
1.  **Tiras Reactivas de pH o pH-metro digital de bolsillo ($30.000 - $80.000 COP):** Todo producto químico/biológico tiene un pH exacto. Si el operario te manda foto del pH y da 7 cuando debería dar 11, sabes que lo hizo mal antes de que se lo vendan al cliente.
2.  **Balanza Gramera Industrial o Pesa Digital colgante ($150.000 COP):** No se mide por "tazas" o "baldes". Se mide en Kilos y Gramos. 
3.  **Cámara IP WiFi ($100.000 COP - ej. marca Tapo/Xiaomi):** Se instala apuntando a la zona de mezclas. Cuesta muy poco, se conecta al WiFi de la bodega, y tú desde tu celular en Bogotá puedes ver en vivo si la persona está trabajando, si fue a la fábrica, y si los tanques están limpios.

## 4. Reingeniería de la Biofábrica (Paso Inmediato)

Antes de hacer el primer litro, necesitamos un "Inventario de Capacidades Reales". Esto es vital.

**Misión para la próxima visita de alguien a Fresno:**
*   Hacer un inventario de cuántos tanques hay, de qué capacidad (1000L, 500L) y de qué material son (plástico azul, acero).
*   Verificar presión de agua (vital para mezclas).
*   Verificar conexiones eléctricas (si hay motobombas).
*   Verificar si el cuarto frío del que hablaba el Tío Ángel realmente enfría a la temperatura que pide el agrónomo.

---
*Con este sistema, la persona que operará la fábrica no tiene que ser un científico. Solo tiene que saber seguir instrucciones, pesar ingredientes, y mandar fotos. La IA y el software (y ustedes desde Bogotá) hacen el trabajo analítico.*