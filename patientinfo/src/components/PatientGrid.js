/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { Card, Table } from "@innovaccer/design-system";

const PatientTable = ({ data, fetchPatientDetail }) => {
  /* const data = [
    {
      firstName: "Brooke",
      lastName: "Heeran",
      email: "bheeran0@altervista.org",
      gender: "Female",
    },
    {
      firstName: "Frazer",
      lastName: "Cathro",
      email: "fcathro1@ucla.edu",
      gender: "Male",
    },
    {
      firstName: "Lemmie",
      lastName: "Ciric",
      email: {
        title: "lciric2@dmoz.org",
        metaList: ["First", "Second"],
      },
      gender: "Male",
    },
    {
      firstName: "Randy",
      lastName: "Boatwright",
      email: "rboatwright3@arstechnica.com",
      gender: "Male",
    },
    {
      firstName: "Rolando",
      lastName: "Cyples",
      email: "rcyples4@biglobe.ne.jp",
      gender: "Male",
    },
    {
      firstName: "Lem",
      lastName: "Males",
      email: "lmales5@admin.ch",
      gender: "Male",
    },
    {
      firstName: "Sayres",
      lastName: "Adelberg",
      email: "sadelberg6@uol.com.br",
      gender: "Male",
    },
    {
      firstName: "Murray",
      lastName: "Bravington",
      email: "mbravington7@drupal.org",
      gender: "Male",
    },
    {
      firstName: "Jena",
      lastName: "Swatheridge",
      email: "jswatheridge8@npr.org",
      gender: "Female",
    },
    {
      firstName: "Annabel",
      lastName: "Nelsey",
      email: "anelsey9@google.com",
      gender: "Female",
    },
  ]; */

  const schema = [
    {
      name: "name",
      displayName: "Name",
      width: "40%",
      resizable: true,
      separator: true,
      tooltip: true,
      translate: (a) => ({
        title: `${a.name}`,
        name: a.name,
      }),
      cellType: "AVATAR_WITH_TEXT",
    },
    {
      name: "age",
      displayName: "Age",
      width: 150,
      resizable: true,
      sorting: false,
      cellType: "WITH_META_LIST",
    },
    {
      name: "gender",
      displayName: "Gender",
      width: 150,
      resizable: true,
      comparator: (a, b) => a.gender.localeCompare(b.gender),
      cellType: "STATUS_HINT",
      translate: (a) => ({
        title: a.gender,
        statusAppearance: a.gender === "Female" ? "alert" : "success",
      }),
      filters: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.gender.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
    {
      name: "contact",
      displayName: "Contact",
      width: 250,
      resizable: true,
      align: "center",
      cellType: "WITH_META_LIST",
    },
    {
      name: "address",
      displayName: "Address",
      width: 200,
      resizable: true,
      cellType: "WITH_META_LIST",
    },
  ];

  const loaderSchema = [
    {
      name: "name",
      displayName: "Name",
      width: "40%",
      resizable: true,
      tooltip: true,
      separator: true,
      filters: [
        {
          label: "A-G",
          value: "a-g",
        },
        {
          label: "H-R",
          value: "h-r",
        },
        {
          label: "S-Z",
          value: "s-z",
        },
      ],
      cellType: "AVATAR_WITH_TEXT",
    },
    {
      name: "age",
      displayName: "Age",
      width: 250,
      resizable: true,
      sorting: false,
      cellType: "WITH_META_LIST",
    },
    {
      name: "gender",
      displayName: "Gender",
      width: 180,
      resizable: true,
      cellType: "STATUS_HINT",
      filters: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
    {
      name: "contact",
      displayName: "Contact",
      width: 100,
      resizable: true,
      align: "center",
      cellType: "ICON",
    },
    {
      name: "address",
      displayName: "Address",
      width: 200,
      resizable: true,
      cellType: "WITH_META_LIST",
    },
  ];

  return (
    <div
      style={{
        height: "350px",
      }}
    >
      <Card className="h-100">
        <Table
          loaderSchema={loaderSchema}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true,
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter((d) =>
              d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withCheckbox={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => {
            console.log(
              `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                selectedList
              )} selectAll: ${selectAll}`
            );
            if (selectedList.length) fetchPatientDetail(selectedList[0]["id"]);
          }}
          withPagination={true}
          pageSize={5}
          onPageChange={(newPage) => console.log(`on-page-change:- ${newPage}`)}
        />
      </Card>
    </div>
  );
};

export default PatientTable;
