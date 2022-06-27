<?php
    class lazyLoadImages extends Plugin {
       
 
 
        public function siteHead(){
            echo '<link rel="stylesheet" href="'.$this->domainPath().'css/lazyload-style.css">';

        }

        public function siteBodyEnd(){

            echo '<script src="'.$this->domainPath().'js/lazyload-script.js"></script>';

        }

        
		public function pageBegin(){

            echo'<span class="lazyloading-content">';

		}


        public function pageEnd(){

            echo '</span>';

        }
		

 


    }
?>