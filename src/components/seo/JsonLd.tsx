/**
 * Renders a JSON-LD structured-data block. Server-safe (no client hooks).
 * Pass any schema.org object; it is serialized into a script tag.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
