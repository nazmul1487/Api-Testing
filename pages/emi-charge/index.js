import React from "react";
import { Container, Table } from "react-bootstrap";

const EMIcharge = () => {

  return (
    <Container>
      <div className=" mt-2 text-center">
        <h5> EMI Charge</h5>
      </div>
      <hr style={{opacity:1}}/>
      <Table responsive="md" style={{ border: "3px" }}>
        <thead>
          <tr>
            <th rowSpan={2}>SL NO.</th>
            <th rowSpan={2}>Bank Name</th>
            <th style={{textAlign:'center'}} colSpan={8}>Months & %</th>
          </tr>
          <tr>
            <th>3</th>
            <th>6</th>
            <th>9</th>
            <th>12</th>
            <th>18</th>
            <th>24</th>
            <th>30</th>
            <th>36</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>AL-ARAFAH ISLAMI BANK LIMITID</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>2</td>
            <td>BANK ASIA LIMITED</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>3</td>
            <td>BRAC BANK LIMITED</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>4</td>
            <td>DHAKA BANK LIMITED</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>5</td>
            <td>DUTCH BANGLA BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>EASTERN BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>7</td>
            <td>EXIM BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>8</td>
            <td>JAMUNA BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>9</td>
            <td>LANKABANGLA FINANCE</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>10</td>
            <td>MUTUAL TRUST BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>11</td>
            <td>NCC BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>12</td>
            <td>PRIME BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>13</td>
            <td>SHAHJALAL ISLAMI BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>14</td>
            <td>SOUTHEAST BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>16.5</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>15</td>
            <td>STANDARD BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>16</td>
            <td>STANDARD CHARTERED BANK</td>
            <td>3.5</td>
            <td>5.5</td>
            <td>8</td>
            <td>10.5</td>
            <td>13.5</td>
            <td>17.5</td>
            <td>&nbsp;</td>
            <td>22.5</td>
          </tr>
          <tr>
            <td>17</td>
            <td>UNITED COMMERCIAL BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>18</td>
            <td>NRB COMMERCIAL BANK LTD</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>19</td>
            <td>NRB Bank Limited</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Meghna Bank Limited</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>21</td>
            <td>SBAC Bank</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Midland Bank Ltd</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>23</td>
            <td>Community Bank Bangladesh Limited</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>24</td>
            <td>CITY BANK LIMITED</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>7.5</td>
            <td>10</td>
            <td>13</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>25</td>
            <td>MERCANTILE BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>16.5</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>26</td>
            <td>ONE BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>27</td>
            <td>PREMIER BANK</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>28</td>
            <td>TRUST BANK LTD</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11.5</td>
            <td>15.5</td>
            <td>&nbsp;</td>
            <td>19.5</td>
          </tr>
          <tr>
            <td>29</td>
            <td>AB BANK LTD</td>
            <td>3.5</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default EMIcharge;
