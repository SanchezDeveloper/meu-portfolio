"use client";

import React, { useState } from "react";
import {  FileDown } from "lucide-react";

export default function DownloadBtnCv() {
  const [downloading, setDownloading] = useState(false);

  async function handleDownloadCv() {
    try {
      setDownloading(true);
      setDownloading(true);
      const res = await fetch("/cv-att-101025.pdf", { cache: "no-store" });
      if (!res.ok) throw new Error("Falha ao buscar o arquivo");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      // Nome do arquivo que será salvo
      a.download = "Vinicius-Caio-Curriculo.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      // liberar memória
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erro ao baixar currículo:", err);
      // opcional: toast ou alert
      alert("Não foi possível baixar o currículo. Tente novamente.");
    } finally {
      setDownloading(false);
    }
    
  }

  return (
    <button
              id="curriculo"
              onClick={handleDownloadCv}
              disabled={downloading}
              className="inline-flex items-center justify-center bg-transparent border border-purple-500 hover:bg-purple-700 hover:border-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-500/30"
            >
              <FileDown className="mr-2" size={20} />
              {downloading ? "Baixando..." : "Baixar currículo"}
            </button>
  );
}

