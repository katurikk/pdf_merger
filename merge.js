const mergepdfs=async (p1,p2) => {
    const PDFMerger = (await import('pdf-merger-js')).default;

    const merger = new PDFMerger();

    await merger.add(p1); // Add your PDF files
    await merger.add(p2);
    let d=new Date().getTime()
    await merger.save(`public/${d}.pdf`);
    return d // Save the merged file
}
module.exports={mergepdfs}