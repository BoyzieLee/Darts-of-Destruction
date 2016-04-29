
$.ajax({
  url: 'https://randomuser.me/api/?inc=picture',
  dataType: 'json',
  success: function(data){
  console.log(data);
  }
});

{
  "results": [
    {      
      "picture": {
        "large": https://randomuser.me/api/portraits/men/80.jpg",
        "medium": https://randomuser.me/api/portraits/med/men/80.jpg",
        "thumbnail": https://randomuser.me/api/portraits/thumb/men/80.jpg"
      },
      "nat": US"
    }
  ],
  "info": {
    "seed": 705567e86a824a27",
    "results": 1,
    "page": 1,
    "version": 1.0"
  }
}



export default testimonials
