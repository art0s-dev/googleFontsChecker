<?php

/**
 * GoogleFontsChecker
 * 
 * crawls given url from ajax and inspects the url,
 * if any gfonts are used and returns a json string
 * 
 * ENUM for JSON
 *  -> type ( the ajax loaded )
 *  -> data ( the url that is given )
 * 
 */
class GoogleFontsChecker
{
   
    
    private $dataFromJson = array();
    private $url = "";
    private $response = false;

    public function __construct($json)
    {
        $data = $this->substractDataFromJson($json);
        $result = $this->crawlUrl($data['data']);
        echo $this->createResponseJson($result);
    }

    /**
     * GET & SET
     */
 
    private function setUrl($new)
    {
        $this->url = $new;
    }


    /**
     * Class methods
     */


    private function substractDataFromJson($json)
    {
        return json_decode($json, JSON_OBJECT_AS_ARRAY);
    }

    private function crawlUrl($url)
    {
        
        if ($data = file_get_contents($url)){
            $response = preg_match('/fonts.googleapis/', $data);
        } else {
            $response = 'ERROR_CANNOT_LOAD';
        }
        
        return $response;
        
    }

    private function createResponseJson($result)
    {
        return json_encode([
            'type' => 'googleFontsChecker',
            'response' => $result
        ]);
    }

}
