class inserts{
  constructor(){
    this.signature='Inserting Posts'
    if (this.importsFunction != null){
      importFunctions(this.importsFunction)
    }
  }
  setImportFunctions(importFunction){
    this.importsFunction=importFunction
  }
  importFunctions(){
    this.importedFunctions=this.importsFunction
  }
}
function importModule(){
  var functioning={
    modulesToImport: function(theContent){
      var contentsToImport=[1, 2, 3, 4]
      contentsToImport.forEach(contentsToExport => {
        console.log("Importing functions: "+contentsToImport)
        inserts.setImportFunctions(contentsToImport)
      })
    }
  }
}
