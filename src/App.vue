

<template>

  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="//cdn.materialdesignicons.com/3.4.93/css/materialdesignicons.min.css">
    <v-app>
    
      <template>
        <v-layout align-center>
          <v-item-group
            v-model="window"
            class="shrink mr-4"
            mandatory
            tag="v-flex"
          >
            <v-item
              v-for="n in length"
              :key="n"
            >
              <div slot-scope="{ active, toggle }">
                <v-btn
                  :input-value="active"
                  icon
                  @click="toggle"
                >
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </div>
            </v-item>
          </v-item-group>

          <v-flex>
            <v-window
              v-model="window"
              class="elevation-1"
              vertical
            >
              <v-window-item
                v-for="n in length"
                :key="n" id="scroll-target"
              >
                <v-card flat v-scroll:#scroll-target="onScroll">
                  <v-card-text>
                    <v-layout align-center mb-3>
                      <v-avatar color="grey" class="mr-3"></v-avatar>
                      <strong class="title">Title {{ n }}</strong>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-account</v-icon>
                      </v-btn>
                    </v-layout>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
<strong class="title">Window {{ window }}</strong>

                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </v-flex>
        </v-layout>
      </template>


  
    </v-app>
  </div>  
</template>

<script>


  export default {
    data: () => ({
      length: 3,//numero de ventanas o secciones  que vas a utilizar
      window: 0,// numero de ventana en que se iniciara
      scrollDirection:'',//direccion en la que el scroll se esta moviendo
      clean:'',//propiedad que contendra la funcion setTimeout que resetea scrollDirection
    }),
    methods: {
      onScroll (e) {
          clearTimeout(this.clean);//limpia el setTimeOut si recibe mas eventos scroll para evitar el salto multiple de ventanas
          if (e.deltaY < 0) {//evalua la direccion en que se esta scrolleando
             if(this.scrollDirection!='up'){//evalua que no se haya ejecutado anteriormente un salto de ventana hacia arriba
               this.scrollDirection='up'
               if(this.window==this.length-1){// si llega al final de las ventanas regresa a la posición 0
                this.window=0
              }
              else{
                this.window++;
              }
             }
          }
          else {
              if(this.scrollDirection!='down'){
                  this.scrollDirection='down'
                  if(this.window==0){
                    this.window=this.length-1
                  }
                  else{
                    this.window--;
                  }
                }
            }
          this.clean=setTimeout(function(){//añade un setTimeOut despues de cada evento para resetear la variable scrollDirection
           this.scrollDirection = ''
        }.bind(this),50)
      }
    }
  }
</script>

