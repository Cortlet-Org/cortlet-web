// /app/legal/mit/page.tsx

export default function MitLicensePage() {
    return (
        <div className="text-neutral-800 dark:text-neutral-200 select-none">

            <h1 className="text-5xl font-bold mb-4">MIT License</h1>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
                This license applies to certain Cortlet open-source software.
            </p>

            <pre className="
                whitespace-pre-wrap text-sm leading-relaxed
                bg-neutral-100 dark:bg-neutral-900
                border border-neutral-300 dark:border-neutral-800
                p-6 rounded-xl
            ">
{`Copyright ${new Date().getFullYear()} Cortlet

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`}
            </pre>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-10">
                © {new Date().getFullYear()} Cortlet — MIT License
            </p>
        </div>
    );
}
