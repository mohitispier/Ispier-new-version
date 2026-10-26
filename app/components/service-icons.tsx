export function LightIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "seo" ? (
        <>
          <circle cx="10" cy="10" r="6" />
          <path d="m14.5 14.5 5 5M7 10h6m-3-3v6" />
        </>
      ) : name === "social" ? (
        <>
          <rect x="5" y="5" width="14" height="15" rx="3" />
          <path d="M3 15V4a2 2 0 0 1 2-2h11" />
          <circle cx="12" cy="11" r="2.5" />
          <path d="M8.5 18v-1a3.5 3.5 0 0 1 7 0v1" />
        </>
      ) : name === "ppc" ? (
        <>
          <circle cx="15" cy="8" r="5" />
          <path d="m2 20 4-11 7 7-11 4Zm5-5 3 3m6-13 1 3-3 1" />
        </>
      ) : name === "content" ? (
        <>
          <path d="M10 4H4v16h16v-6M9 15l1-4L19 2l3 3-9 9-4 1Z" />
          <path d="m16 5 3 3M7 8h2M7 11h1" />
        </>
      ) : name === "email" ? (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </>
      ) : name === "web" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="m6 7 3 11 3-8 3 8 3-11M6 7h3m6 0h3" />
        </>
      ) : (
        <>
          <path d="m5 3 16 16-2 2L3 5l2-2Zm-2 16 6-6m5-5 5-5 2 2-5 5M3 19l2 2 4-4" />
          <circle cx="17.5" cy="5.5" r="3" />
          <circle cx="5.5" cy="17.5" r="3" />
        </>
      )}
    </svg>
  );
}
