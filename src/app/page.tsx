import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/45fbb356-73e3-4b88-a4de-428d406fd539-pntwvl.jpeg",
  "https://utfs.io/f/80337012-c094-48e2-bf2a-4258435ee64f-smzywm.jpeg",

  "https://utfs.io/f/45fbb356-73e3-4b88-a4de-428d406fd539-pntwvl.jpeg",
  "https://utfs.io/f/80337012-c094-48e2-bf2a-4258435ee64f-smzywm.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="aspect-square w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
