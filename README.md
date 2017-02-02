# FED Project Setup V2

This is the base folder structure and Webpack setup to be used on new projects.


WebPack Instructions
======
1. Download Node JS. https://nodejs.org/en/
2. Download WebPack Task Runner for Visual Studio. https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebPackTaskRunner

Setting Up Project
======
1. Drag and drop package.json + webpack.config.js + .eslintrc to root Web directory.
2. Drag and drop app + static folders to root Web directory.
3. Run "npm install" in root directory to download necessary packages.
4. Ignore dist + stylesheets folder from Source Control.

    .gitignore
    ```
    /<Project>/dist
    /<Project>/static/stylesheets/
    ```

How to Use
======
1. Open Task Runner Explorer in Visual Studio. 
2. "Run - Development" will run single webpack compile. 
3. "Watch - Development" will watch for changes and compile as necessary.

Note: Bindings are included to automate these when building a project (Run) or opening a project (Watch).

Setting Up Code
======
1. ASP.NET Razor

    _Root.cshtml
    ```
    <head>

        <link rel="stylesheet" type="text/css" href="~/Static/stylesheets/main.css">

    </head>
    <body>

        <script src="~/dist/app/index.js"></script>

        @RenderSection("scripts", required: false)

    </body>
    ```

    Example.cshtml
    ```
    @section scripts {

        <script src="~/dist/example/index.js"></script>

    }
    ```

2.  ASP.NET Web Forms

    MasterPage.Master
    ```
    <head>

        <link rel="stylesheet" type="text/css" href="~/static/stylesheets/main.css">

    </head>
    <body>
    
        <script src="~/dist/app/index.js"></script>

        <asp:ContentPlaceHolder ID="beforeCloseBody" runat="server"></asp:ContentPlaceHolder>

    </body>
    ```

    Example.aspx
    ```
    <asp:Content ID="Content4" ContentPlaceHolderID="beforeCloseBody" runat="server">

        <script src="~/dist/example/index.js"></script>

    </asp:Content>
    ```
