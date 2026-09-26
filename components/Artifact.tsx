import Image from "next/image";
import type { Artifact as ArtifactData } from "@/content/site";
import { Schematic } from "./Schematic";

export function Artifact({
  artifact,
  priority = false,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 480px, 100vw",
  showCaption = true,
}: {
  artifact: ArtifactData;
  priority?: boolean;
  aspect?: string;
  sizes?: string;
  showCaption?: boolean;
}) {
  return (
    <figure>
      <div className={`relative overflow-hidden bg-paper ${aspect}`}>
        {artifact.src ? (
          <Image
            src={artifact.src}
            alt={artifact.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <Schematic variant={artifact.variant} className="absolute inset-0 h-full w-full" />
        )}
      </div>
      {showCaption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted">
          {artifact.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
