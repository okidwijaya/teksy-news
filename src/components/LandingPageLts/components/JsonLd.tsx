type SchemaProps = {
  schema: Record<string, unknown>;
};

/**
 * Renders a JSON-LD <script> tag for structured data.
 * Usage: <JsonLd schema={professionalServiceSchema} />
 */
export default function JsonLd({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
