'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        {
        "articleId": 1,
        "tagId": 1
        }, {
        "articleId": 2,
        "tagId": 1
        }, {
        "articleId": 3,
        "tagId": 1
        }, {
        "articleId": 4,
        "tagId": 1
        }, {
        "articleId": 5,
        "tagId": 1
        }, {
        "articleId": 6,
        "tagId": 1
        }, {
        "articleId": 7,
        "tagId": 1
        }, {
        "articleId": 8,
        "tagId": 1
        }, {
        "articleId": 9,
        "tagId": 1
        }, {
        "articleId": 10,
        "tagId": 1
        }, {
        "articleId": 11,
        "tagId": 1
        }, {
        "articleId": 12,
        "tagId": 1
        }, {
        "articleId": 13,
        "tagId": 1
        }, {
        "articleId": 14,
        "tagId": 1
        }, {
        "articleId": 15,
        "tagId": 1
        }, {
        "articleId": 16,
        "tagId": 1
        }, {
        "articleId": 17,
        "tagId": 1
        }, {
        "articleId": 18,
        "tagId": 1
        }, {
        "articleId": 19,
        "tagId": 1
        }, {
        "articleId": 20,
        "tagId": 1
        }, {
        "articleId": 21,
        "tagId": 1
        }, {
        "articleId": 22,
        "tagId": 1
        }, {
        "articleId": 23,
        "tagId": 1
        }, {
        "articleId": 24,
        "tagId": 1
        }, {
        "articleId": 25,
        "tagId": 1
        }, {
        "articleId": 26,
        "tagId": 1
        }, {
        "articleId": 27,
        "tagId": 1
        }, {
        "articleId": 28,
        "tagId": 1
        }, {
        "articleId": 29,
        "tagId": 1
        }, {
        "articleId": 30,
        "tagId": 1
        }, {
        "articleId": 31,
        "tagId": 1
        }, {
        "articleId": 32,
        "tagId": 1
        }, {
        "articleId": 33,
        "tagId": 1
        }, {
        "articleId": 34,
        "tagId": 1
        }, {
        "articleId": 35,
        "tagId": 1
        }, {
        "articleId": 36,
        "tagId": 1
        }, {
        "articleId": 37,
        "tagId": 1
        }, {
        "articleId": 38,
        "tagId": 1
        }, {
        "articleId": 39,
        "tagId": 1
        }, {
        "articleId": 40,
        "tagId": 1
        }, {
        "articleId": 41,
        "tagId": 1
        }, {
        "articleId": 42,
        "tagId": 1
        }, {
        "articleId": 43,
        "tagId": 1
        }, {
        "articleId": 44,
        "tagId": 1
        }, {
        "articleId": 45,
        "tagId": 1
        },
        {
        "articleId": 1,
        "tagId": 2
        }, {
        "articleId": 2,
        "tagId": 2
        }, {
        "articleId": 3,
        "tagId": 2
        }, {
        "articleId": 4,
        "tagId": 2
        }, {
        "articleId": 5,
        "tagId": 2
        }, {
        "articleId": 6,
        "tagId": 2
        }, {
        "articleId": 7,
        "tagId": 2
        }, {
        "articleId": 8,
        "tagId": 2
        }, {
        "articleId": 9,
        "tagId": 2
        }, {
        "articleId": 10,
        "tagId": 2
        }, {
        "articleId": 11,
        "tagId": 2
        }, {
        "articleId": 12,
        "tagId": 2
        }, {
        "articleId": 13,
        "tagId": 2
        }, {
        "articleId": 14,
        "tagId": 2
        }, {
        "articleId": 15,
        "tagId": 2
        }, {
        "articleId": 16,
        "tagId": 2
        }, {
        "articleId": 17,
        "tagId": 2
        }, {
        "articleId": 18,
        "tagId": 2
        }, {
        "articleId": 19,
        "tagId": 2
        }, {
        "articleId": 20,
        "tagId": 2
        }, {
        "articleId": 21,
        "tagId": 2
        },
        {
        "articleId": 22,
        "tagId": 3
        }, {
        "articleId": 23,
        "tagId": 3
        }, {
        "articleId": 24,
        "tagId": 3
        }, {
        "articleId": 25,
        "tagId": 3
        }, {
        "articleId": 26,
        "tagId": 3
        }, {
        "articleId": 27,
        "tagId": 3
        }, {
        "articleId": 28,
        "tagId": 3
        }, {
        "articleId": 29,
        "tagId": 3
        }, {
        "articleId": 30,
        "tagId": 3
        }, {
        "articleId": 31,
        "tagId": 3
        }, {
        "articleId": 32,
        "tagId": 3
        }, {
        "articleId": 33,
        "tagId": 3
        }, {
        "articleId": 34,
        "tagId": 3
        }, {
        "articleId": 35,
        "tagId": 3
        }, {
        "articleId": 36,
        "tagId": 3
        }, {
        "articleId": 37,
        "tagId": 3
        }, {
        "articleId": 38,
        "tagId": 3
        }, {
        "articleId": 39,
        "tagId": 3
        }, {
        "articleId": 40,
        "tagId": 3
        }, {
        "articleId": 41,
        "tagId": 3
        }, {
        "articleId": 42,
        "tagId": 3
        }, {
        "articleId": 43,
        "tagId": 3
        }, {
        "articleId": 44,
        "tagId": 3
        }, {
        "articleId": 45,
        "tagId": 3
        },
        {
        "articleId": 46,
        "tagId": 4
        }, {
        "articleId": 47,
        "tagId": 4
        }, {
        "articleId": 48,
        "tagId": 4
        }, {
        "articleId": 49,
        "tagId": 4
        }, {
        "articleId": 50,
        "tagId": 4
        }, {
        "articleId": 51,
        "tagId": 4
        }, {
        "articleId": 52,
        "tagId": 4
        }, {
        "articleId": 53,
        "tagId": 4
        }, {
        "articleId": 54,
        "tagId": 4
        }, {
        "articleId": 55,
        "tagId": 4
        }, {
        "articleId": 56,
        "tagId": 4
        }, {
        "articleId": 57,
        "tagId": 4
        }, {
        "articleId": 58,
        "tagId": 4
        }, {
        "articleId": 59,
        "tagId": 4
        }, {
        "articleId": 60,
        "tagId": 4
        }, {
        "articleId": 61,
        "tagId": 4
        }, {
        "articleId": 62,
        "tagId": 4
        }, {
        "articleId": 63,
        "tagId": 4
        }, {
        "articleId": 64,
        "tagId": 4
        }, {
        "articleId": 65,
        "tagId": 4
        }, {
        "articleId": 66,
        "tagId": 4
        }, {
        "articleId": 67,
        "tagId": 4
        }, {
        "articleId": 68,
        "tagId": 4
        }, {
        "articleId": 69,
        "tagId": 4
        }, {
        "articleId": 70,
        "tagId": 4
        }, {
        "articleId": 71,
        "tagId": 4
        }, {
        "articleId": 72,
        "tagId": 4
        }, {
        "articleId": 73,
        "tagId": 4
        }, {
        "articleId": 74,
        "tagId": 4
        }, {
        "articleId": 75,
        "tagId": 4
        }, {
        "articleId": 76,
        "tagId": 4
        }, {
        "articleId": 77,
        "tagId": 4
        }, {
        "articleId": 78,
        "tagId": 4
        }, {
        "articleId": 79,
        "tagId": 4
        }, {
        "articleId": 80,
        "tagId": 4
        }, {
        "articleId": 81,
        "tagId": 4
        }, {
        "articleId": 82,
        "tagId": 4
        }, {
        "articleId": 83,
        "tagId": 4
        }, {
        "articleId": 84,
        "tagId": 4
        }, {
        "articleId": 85,
        "tagId": 4
        }, {
        "articleId": 86,
        "tagId": 4
        }, {
        "articleId": 87,
        "tagId": 4
        },
        {
        "articleId": 46,
        "tagId": 5
        }, {
        "articleId": 47,
        "tagId": 5
        }, {
        "articleId": 48,
        "tagId": 5
        }, {
        "articleId": 49,
        "tagId": 5
        }, {
        "articleId": 50,
        "tagId": 5
        }, {
        "articleId": 51,
        "tagId": 5
        }, {
        "articleId": 52,
        "tagId": 5
        }, {
        "articleId": 53,
        "tagId": 5
        }, {
        "articleId": 54,
        "tagId": 5
        }, {
        "articleId": 55,
        "tagId": 5
        }, {
        "articleId": 56,
        "tagId": 5
        }, {
        "articleId": 57,
        "tagId": 5
        }, {
        "articleId": 58,
        "tagId": 5
        }, {
        "articleId": 59,
        "tagId": 5
        }, {
        "articleId": 60,
        "tagId": 5
        }, {
        "articleId": 61,
        "tagId": 5
        }, {
        "articleId": 62,
        "tagId": 5
        }, {
        "articleId": 63,
        "tagId": 5
        },
        {
        "articleId": 64,
        "tagId": 6
        }, {
        "articleId": 65,
        "tagId": 6
        }, {
        "articleId": 66,
        "tagId": 6
        }, {
        "articleId": 67,
        "tagId": 6
        }, {
        "articleId": 68,
        "tagId": 6
        }, {
        "articleId": 69,
        "tagId": 6
        }, {
        "articleId": 70,
        "tagId": 6
        }, {
        "articleId": 71,
        "tagId": 6
        }, {
        "articleId": 72,
        "tagId": 6
        }, {
        "articleId": 73,
        "tagId": 6
        }, {
        "articleId": 74,
        "tagId": 6
        }, {
        "articleId": 75,
        "tagId": 6
        }, {
        "articleId": 76,
        "tagId": 6
        }, {
        "articleId": 77,
        "tagId": 6
        }, {
        "articleId": 78,
        "tagId": 6
        }, {
        "articleId": 79,
        "tagId": 6
        }, {
        "articleId": 80,
        "tagId": 6
        }, {
        "articleId": 81,
        "tagId": 6
        }, {
        "articleId": 82,
        "tagId": 6
        }, {
        "articleId": 83,
        "tagId": 6
        }, {
        "articleId": 84,
        "tagId": 6
        }, {
        "articleId": 85,
        "tagId": 6
        }, {
        "articleId": 86,
        "tagId": 6
        }, {
        "articleId": 87,
        "tagId": 6
        },
        {
        "articleId": 88,
        "tagId": 7
        }, {
        "articleId": 89,
        "tagId": 7
        }, {
        "articleId": 90,
        "tagId": 7
        }, {
        "articleId": 91,
        "tagId": 7
        }, {
        "articleId": 92,
        "tagId": 7
        }, {
        "articleId": 93,
        "tagId": 7
        }, {
        "articleId": 94,
        "tagId": 7
        }, {
        "articleId": 95,
        "tagId": 7
        }, {
        "articleId": 96,
        "tagId": 7
        }, {
        "articleId": 97,
        "tagId": 7
        }, {
        "articleId": 98,
        "tagId": 7
        }, {
        "articleId": 99,
        "tagId": 7
        }, {
        "articleId": 100,
        "tagId": 7
        }, {
        "articleId": 101,
        "tagId": 7
        }, {
        "articleId": 102,
        "tagId": 7
        }, {
        "articleId": 103,
        "tagId": 7
        }, {
        "articleId": 104,
        "tagId": 7
        }, {
        "articleId": 105,
        "tagId": 7
        }, {
        "articleId": 106,
        "tagId": 7
        }, {
        "articleId": 107,
        "tagId": 7
        }, {
        "articleId": 108,
        "tagId": 7
        },
        {
        "articleId": 109,
        "tagId": 8
        }, {
        "articleId": 110,
        "tagId": 8
        }, {
        "articleId": 111,
        "tagId": 8
        }, {
        "articleId": 112,
        "tagId": 8
        }, {
        "articleId": 113,
        "tagId": 8
        }, {
        "articleId": 114,
        "tagId": 8
        }, {
        "articleId": 115,
        "tagId": 8
        }, {
        "articleId": 116,
        "tagId": 8
        }, {
        "articleId": 117,
        "tagId": 8
        }, {
        "articleId": 118,
        "tagId": 8
        }, {
        "articleId": 119,
        "tagId": 8
        }, {
        "articleId": 120,
        "tagId": 8
        }, {
        "articleId": 121,
        "tagId": 8
        }, {
        "articleId": 122,
        "tagId": 8
        }, {
        "articleId": 123,
        "tagId": 8
        },
        {
        "articleId": 124,
        "tagId": 9
        }, {
        "articleId": 125,
        "tagId": 9
        }, {
        "articleId": 126,
        "tagId": 9
        }, {
        "articleId": 127,
        "tagId": 9
        }, {
        "articleId": 128,
        "tagId": 9
        }, {
        "articleId": 129,
        "tagId": 9
        }, {
        "articleId": 130,
        "tagId": 9
        }, {
        "articleId": 131,
        "tagId": 9
        }, {
        "articleId": 132,
        "tagId": 9
        }, {
        "articleId": 133,
        "tagId": 9
        }, {
        "articleId": 134,
        "tagId": 9
        }, {
        "articleId": 135,
        "tagId": 9
        }, {
        "articleId": 136,
        "tagId": 9
        }, {
        "articleId": 137,
        "tagId": 9
        }, {
        "articleId": 138,
        "tagId": 9
        }, {
        "articleId": 139,
        "tagId": 9
        }, {
        "articleId": 140,
        "tagId": 9
        }, {
        "articleId": 141,
        "tagId": 9
        }, {
        "articleId": 142,
        "tagId": 9
        }, {
        "articleId": 143,
        "tagId": 9
        }, {
        "articleId": 144,
        "tagId": 9
        },
        {
        "articleId": 145,
        "tagId": 10
        }, {
        "articleId": 146,
        "tagId": 10
        }, {
        "articleId": 147,
        "tagId": 10
        }, {
        "articleId": 148,
        "tagId": 10
        }, {
        "articleId": 149,
        "tagId": 10
        }, {
        "articleId": 150,
        "tagId": 10
        }, {
        "articleId": 151,
        "tagId": 10
        }, {
        "articleId": 152,
        "tagId": 10
        }, {
        "articleId": 153,
        "tagId": 10
        }, {
        "articleId": 154,
        "tagId": 10
        }, {
        "articleId": 155,
        "tagId": 10
        }, {
        "articleId": 156,
        "tagId": 10
        },
        {
        "articleId": 157,
        "tagId": 11
        }, {
        "articleId": 158,
        "tagId": 11
        }, {
        "articleId": 159,
        "tagId": 11
        }, {
        "articleId": 160,
        "tagId": 11
        }, {
        "articleId": 161,
        "tagId": 11
        }, {
        "articleId": 162,
        "tagId": 11
        }, {
        "articleId": 163,
        "tagId": 11
        }, {
        "articleId": 164,
        "tagId": 11
        }, {
        "articleId": 165,
        "tagId": 11
        }, {
        "articleId": 166,
        "tagId": 11
        }, {
        "articleId": 167,
        "tagId": 11
        }, {
        "articleId": 168,
        "tagId": 11
        }, {
        "articleId": 169,
        "tagId": 11
        }, {
        "articleId": 170,
        "tagId": 11
        }, {
        "articleId": 171,
        "tagId": 11
        }, {
        "articleId": 172,
        "tagId": 11
        }, {
        "articleId": 173,
        "tagId": 11
        }, {
        "articleId": 174,
        "tagId": 11
        }, {
        "articleId": 175,
        "tagId": 11
        }, {
        "articleId": 176,
        "tagId": 11
        }, {
        "articleId": 177,
        "tagId": 11
        }
    ]
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Article_Tags', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Article_Tags', null, {});
  }
};