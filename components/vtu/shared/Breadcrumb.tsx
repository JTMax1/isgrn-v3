import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  serviceName: string;
}

export function Breadcrumb({ serviceName }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link
            href="/"
            className="hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </li>
        <li>
          <Link
            href="/services"
            className="hover:text-gray-900 transition-colors"
          >
            Services
          </Link>
        </li>
        <li>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </li>
        <li className="font-medium text-gray-900" aria-current="page">
          {serviceName}
        </li>
      </ol>
    </nav>
  );
}
