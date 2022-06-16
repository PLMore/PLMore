# Bill of Materials
This microservice will handle the BoM Backend logic.
A bill of materials is a comprehensive inventory of the raw materials, assemblies, subassemblies, parts and components as well as the quantities of each, needed to manufacture a
product.
A well defined BOM contains:
* Plan purchases of raw materials.
* Estimate material costs.
* Gain inventory control.
* Track and plan material requirements.
* Maintain accurate records.
* Esnure supply robustness and reduce waste.
## Bom structure
A BoM is hierarchical in nature, with the finished product at the top. It includes product coes, parts description, quantities cost and additional specifications.

![Image](https://cdn.ttgtmedia.com/rms/onlineimages/erp-bill_of_materials_1.png)

However there are multiple methods to represent a BOM. They are the following:
* Single-level bill of materials: Which is a relativemly simple list of product. In this type each assembly is shown only once, with the corresponding quantity required of each to make the product. Though easy to develop , this type is not Suitable for complex products. So we will not have it in PLMORE.

* Multilevel Bill of Materials: Which takes more work to create but offers greater details and specificy on the parent and child parts in the product. In a multilevel BOM, the total material required is shown, Additionally, the product structure is indented to show the relationship between the parent and child product, as well as assemblies and subassemblies.

![Image](https://cdn.ttgtmedia.com/rms/onlineimages/erp-bill_of_materials_2.png)

## Types of BOM
There are 3 main types of BOMs to be aware of:
* Manufacturing bill of materials: A manufacturing BOM includes a structured list of all the items or subassemblies required to make a manufactured shippable finished product. An MBOM, in addition to the information on individual parts, also includes information on the parts that require processing prior to assembly and explains how various components relate to one another in a product. The information in the MBOM is then shared with all the integrated business ystems involved in ordering  and building the product, including entreprise ressource p lanning(ERP), material requirements planning (MRP) and in some cases, a manufacturing execution system (MES).

* Engineering Bill of Materials: An engineering BOM defines assemblies or parts as designed by the engineering department. Showing the component structure from a functional perspective. an EBOM for example will consist of a mechanical or technical drawing of a product. An Ebom is typically developed by engineers using Computer aided Design (CAD) or eletronic design automation( EDA ) tools. And it is common to have more than one EBOM for a product as the design undergoes a series of revisions.

* Sales Bill of Material: A sales BOM (SBOM) defines a product in the sales stage, meaning details of the products prior to assembly. In an SBOM the list of finished productsand the components required to develop it appear seperately in the sales order document. Here the finished product is managed as a sales item instead of an inventory item.
It is important to note that each type of BOM will involve a different structure and levle of detail. For example, an EBOM may list parts related to specefic function of the prudct such as chips for a circuit board, an MBOM by defnintion lists every material that goes into manufacturing a product.