/*
 * @Author: 柒叶
 * @Date: 2020-04-07 10:45:40
 * @Last Modified by: 柒叶
 * @Last Modified time: 2020-05-15 12:14:16
 */

'use strict';

module.exports = app => {
  const { INTEGER, TEXT } = app.Sequelize;
  const Comment = app.model.define('comments', {
    id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    uid: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    article_id: {
      type: INTEGER,
      allowNull: false,
    },
    content: {
      type: TEXT,
      defaultValue: null,
      comment: '评论内容',
    },
    status: {
      type: INTEGER,
      defaultValue: 1,
      comment: '1->正常,2->删除',
    },
  });
  Comment.associate = () => {
    app.model.Comment.belongsTo(app.model.User, { as: 'user', foreignKey: 'uid' });
    app.model.Comment.belongsTo(app.model.Article, { as: 'article' });
  };
  return Comment;
};

