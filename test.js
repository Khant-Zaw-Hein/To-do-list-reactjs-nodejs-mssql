const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  console.log(validateEmail("khant@email.com"))

//   class ParamError extends Error {}
// class DBError extends Error {}

// const myfunc = () => {
//     try {
//         // do something
//         return // happy
//     } catch (eInfo) {
//         // error
//         console.log(eInfo)
        
//         if (eInfo instanceof ParamError) {
//             return Response.status(400).json({ message: 'parameter error'})
//         }
//         else if (eInfo instanceof DBError) {
//             return Response.status(500).json({ message: 'internal error' })
//         }

        
//     }
// }