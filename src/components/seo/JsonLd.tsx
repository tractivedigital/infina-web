/** Renders one or more schema.org JSON-LD documents. */
export function JsonLd({ data }: { data: unknown }) {
  const docs = Array.isArray(data) ? data : [data];
  return (
    <>
      {docs.map((doc, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Serialised from static, build-time data; "<" is escaped to keep the tag well-formed.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doc).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}
