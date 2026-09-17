export const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 px-6 py-3 text-slate-400">

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">

                {/* Logo */}
                <span className="font-bold text-white">
                    🎬 MovieExplorer
                </span>

                <span className="text-slate-600">|</span>

                {/* Social Links */}
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                >
                    GitHub
                </a>

                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-500"
                >
                    Facebook
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-pink-500"
                >
                    Instagram
                </a>

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-500"
                >
                    LinkedIn
                </a>

                <span className="text-slate-600">|</span>

                {/* Copyright */}
                <span>
                    © 2026 MovieExplorer
                </span>

            </div>

        </footer>
    );
};