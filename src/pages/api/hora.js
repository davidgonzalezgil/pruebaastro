export function obtenerHoraData() {
  return {
    laFecha: new Date().toLocaleString("es-ES")
  };
}

export async function GET() {
  return new Response(JSON.stringify(obtenerHoraData()), {
    headers: { "Content-Type": "application/json" },
  });
}