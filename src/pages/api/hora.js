export async function GET() {
    const fecha = new Date().toLocaleString("es-ES");
    return new Response(
        JSON.stringify({ laFecha: fecha, msg: "hola"}),
        { headers: { "Content-Type": "application/json" } }
    );
}