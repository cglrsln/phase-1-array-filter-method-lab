
function findMatching(drivers, name){
    return drivers.filter( driver => {
      return (driver.toLowerCase() === name.toLowerCase())
     }
    )
  }



  function fuzzyMatch(drivers, letters){
    return drivers.filter( driver => {
      if (letters.charAt(1) === driver.charAt(1)){
      return driver
      }
    })
  }



  function matchName(drivers, name){
    return drivers.filter( driver => {
      if (driver.name == name){
      return driver;
      }
    })
  }
