import React from "react";
import { Button } from "@nextui-org/react";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const pageTitles = [
    "Entreprise",
    "Axe compétence",
    "Axe réactivité",
    "Axe numérique",
  ];

  return (
    <div className="flex items-center justify-center space-x-4">
      <Button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        auto
        bordered
        size="sm"
        className="prev-next-button"
      >
        Précédent
      </Button>
      {pageTitles.map((title, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          auto
          flat={currentPage !== index + 1}
          color={currentPage === index + 1 ? "success" : "default"}
          className="page-button"
        >
          {title}
        </Button>
      ))}
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        auto
        bordered
        size="sm"
        className="prev-next-button"
      >
        Suivant
      </Button>
    </div>
  );
};

export default CustomPagination;
