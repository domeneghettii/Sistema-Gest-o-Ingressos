const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const ingressoModel = require("../models/ingressoModel");

const exportIngressoCSV = async (req, res) => {
    try {
        const ingressos =  await ingressoModel.getAllIngressos();

        res.setHeader("Content-Disposition", "attachment; filename=ingresso.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true});
        csvStream.pipe(res);

        ingressos.forEach((ingresso) => {
            csvStream.write({
                Id: ingresso.id,
                Nome: ingresso.name,
                Casa: ingresso.house_name || "Sem Casa"
            });
        });
        
        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV"});
    }
};

const exportIngressoPDF = async (req, res) => {
    try {
        const ingressos = await ingressoModel.getAllIngressos();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=ingresso.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("GERENCIAMENTO DE INGRESSOS", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(13).text("Id | Evento | Local | Data | Categoria | Preço | Quantidade", {align: "center"});
        doc.moveDown(0.5);

        //Add dados dos bruxos
        ingressos.forEach((ticket) => {
            doc.text (
                `${ingresso.id} | ${ingresso.evento} | ${ingresso.local} | ${ingresso.data_evento} | ${ingresso.categoria} | ${ingresso.preco} | ${ingresso.quantidade_disponivel}`,
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"}); 
    }
};

module.exports = { exportIngressoCSV, exportIngressoPDF };