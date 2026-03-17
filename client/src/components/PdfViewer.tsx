import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfViewerProps {
  src: string;
  title: string;
  testId: string;
}

export default function PdfViewer({ src, title, testId }: PdfViewerProps) {
  const [loadError, setLoadError] = useState(false);

  const absoluteUrl = `${window.location.origin}${src}`;
  const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(absoluteUrl)}&embedded=true`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <a href={src} download>
          <Button
            variant="outline"
            className="rounded-xl gap-2"
            data-testid={`${testId}-download`}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </a>
        <a href={src} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="rounded-xl gap-2"
            data-testid={`${testId}-open`}
          >
            <ExternalLink className="w-4 h-4" />
            Open in New Tab
          </Button>
        </a>
      </div>
      <div
        className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
        style={{ height: "calc(100vh - 280px)", minHeight: "500px" }}
      >
        {!loadError ? (
          <iframe
            src={googleViewerUrl}
            className="w-full h-full"
            title={title}
            data-testid={testId}
            onError={() => setLoadError(true)}
          />
        ) : (
          <iframe
            src={src}
            className="w-full h-full"
            title={title}
            data-testid={testId}
          />
        )}
      </div>
    </div>
  );
}
