import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    newsletter: defineAction({
        input: z.object({
            email: z.string(),
        }),
        handler: async (input, context) => {
            console.log("email guardado correctamente");
            return {
                success: true,
                message: "te has suscrito correctamente"
            };
        }
    })
};