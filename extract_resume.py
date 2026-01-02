import PyPDF2

pdf = open(r'c:\Users\Dharshini Senthil\Downloads\my portfolio\assets\Dharshini-S-FlowCV-Resume.pdf', 'rb')
reader = PyPDF2.PdfReader(pdf)
for page in reader.pages:
    print(page.extract_text())
pdf.close()
