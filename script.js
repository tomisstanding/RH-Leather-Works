//Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu

$(document).ready(function(){
  $('.hamburger-shell').click(function(){
    $('#menu').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.menu-name').toggleClass('bump');
    $('.bg-cover').toggleClass('reveal');
  });
  $('.bg-cover').click(function(){
    $('#menu').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.menu-name').toggleClass('bump');
    $('.bg-cover').toggleClass('reveal');
  })
});

// Hyde wallet
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'rhleatherworks.myshopify.com',
      apiKey: 'dbaf36b6b0f015595641f85c4a28c780',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [10961194052],
        node: document.getElementById('product-component-91b03edd398'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#e0e0e0",
        "color": "#797979",
        "font-family": "Playfair Display, serif",
        "padding-left": "25px",
        "padding-right": "25px",
        ":hover": {
          "background-color": "#cacaca",
          "color": "#797979"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Playfair Display, serif",
        "font-size": "26px"
      },
      "description": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-size": "18px",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "15px",
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "cart": {
        "background-color": "#f6f6f6"
      },
      "button": {
        "background-color": "#e0e0e0",
        "color": "#797979",
        "font-family": "Playfair Display, serif",
        ":hover": {
          "background-color": "#cacaca",
          "color": "#797979"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#f6f6f6"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#e0e0e0",
        "color": "#797979",
        "font-family": "Playfair Display, serif",
        "padding-left": "25px",
        "padding-right": "25px",
        ":hover": {
          "background-color": "#cacaca",
          "color": "#797979"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Playfair Display, serif"
      },
      "description": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Playfair Display, serif",
        "background-color": "#e0e0e0",
        ":hover": {
          "background-color": "#cacaca"
        },
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "count": {
        "color": "#797979",
        ":hover": {
          "color": "#797979"
        }
      },
      "iconPath": {
        "fill": "#797979"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Playfair Display, serif"
      },
      "select": {
        "font-family": "Playfair Display, serif"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
// end hyde

// start barton
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'rhleatherworks.myshopify.com',
      apiKey: 'dbaf36b6b0f015595641f85c4a28c780',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [10970104388],
        node: document.getElementById('product-component-eec70d40fe2'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#e0e0e0",
        "color": "#797979",
        "font-family": "Playfair Display, serif",
        "padding-left": "25px",
        "padding-right": "25px",
        ":hover": {
          "background-color": "#cacaca",
          "color": "#797979"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Playfair Display, serif",
        "font-size": "26px"
      },
      "description": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-size": "18px",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "15px",
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "cart": {
        "background-color": "#f6f6f6"
      },
      "button": {
        "background-color": "#e0e0e0",
        "color": "#797979",
        "font-family": "Playfair Display, serif",
        ":hover": {
          "background-color": "#cacaca",
          "color": "#797979"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#f6f6f6"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#e0e0e0",
        "color": "#797979",
        "font-family": "Playfair Display, serif",
        "padding-left": "25px",
        "padding-right": "25px",
        ":hover": {
          "background-color": "#cacaca",
          "color": "#797979"
        },
        "border-radius": "10px",
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Playfair Display, serif"
      },
      "description": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Playfair Display, serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Playfair Display, serif",
        "background-color": "#e0e0e0",
        ":hover": {
          "background-color": "#cacaca"
        },
        ":focus": {
          "background-color": "#cacaca"
        },
        "font-weight": "normal"
      },
      "count": {
        "color": "#797979",
        ":hover": {
          "color": "#797979"
        }
      },
      "iconPath": {
        "fill": "#797979"
      }
    },
    "googleFonts": [
      "Playfair Display"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Playfair Display, serif"
      },
      "select": {
        "font-family": "Playfair Display, serif"
      }
    },
    "googleFonts": [
      "Playfair Display",
      "Playfair Display"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
// end barton
